import type { IncomingMessage, ServerResponse } from 'node:http';
import type { Plugin, ViteDevServer } from 'vite';

type ChatMessage = {
  role: 'user' | 'assistant';
  content: string;
};

type ChatRequest = {
  message?: unknown;
  history?: unknown;
};

const SYSTEM_INSTRUCTION = `You are the AI Eco-Mentor for EARTH-ED AI, an environmental education platform for students.
Focus on climate change, global warming, air and water pollution, plastic waste, recycling, waste management, biodiversity, ecosystem protection, renewable energy, water conservation, sustainable living, carbon footprints, environmental science, student environmental projects, and college sustainability initiatives.
Explain difficult topics simply when requested, provide practical and actionable recommendations, and use examples relevant to students and colleges. When giving advice, explain the cause of the environmental problem, then give affordable steps in a clear order.
Suggest measurable ways to track progress, but calculate environmental impact only when the user provides enough inputs and a defensible method is available. Label calculations as estimates, state assumptions and units, and distinguish them from user-reported or independently verified results.
Do not fabricate statistics, citations, studies, or environmental results. If a current or location-specific fact cannot be verified from the conversation, say so and recommend a reliable source to check. Do not imply that an action is verified merely because the user reports completing it.
For college projects, include a feasible objective, stakeholders, materials, steps, timeline, safety/accessibility considerations, and evaluation measures.
Do not shame users about environmental behavior or claim to perform real-world actions. Keep answers clear, friendly, and appropriately detailed.`;

const MAX_HISTORY_MESSAGES = 20;
const MAX_MESSAGE_LENGTH = 2000;
const MAX_TOTAL_LENGTH = 12000;
const MAX_REQUEST_BYTES = 20000;
const RATE_LIMIT_WINDOW_MS = 60_000;
const MAX_REQUESTS_PER_WINDOW = 30;
const GEMINI_TIMEOUT_MS = 30_000;
const requestsByClient = new Map<string, number[]>();

const sendJson = (response: ServerResponse, status: number, body: Record<string, string>) => {
  response.statusCode = status;
  response.setHeader('Content-Type', 'application/json; charset=utf-8');
  response.end(JSON.stringify(body));
};

const readBody = async (request: IncomingMessage): Promise<string> => {
  const chunks: Buffer[] = [];
  let length = 0;

  for await (const chunk of request) {
    const buffer = Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk);
    length += buffer.length;
    if (length > MAX_REQUEST_BYTES) {
      throw new Error('Request body is too large.');
    }
    chunks.push(buffer);
  }

  return Buffer.concat(chunks).toString('utf8');
};

const parseMessage = (value: unknown, label: string): ChatMessage => {
  if (
    typeof value !== 'object' ||
    value === null ||
    !('role' in value) ||
    !('content' in value) ||
    (value.role !== 'user' && value.role !== 'assistant') ||
    typeof value.content !== 'string'
  ) {
    throw new Error(`${label} must contain a valid role and text.`);
  }

  const content = value.content.trim();
  if (!content || content.length > MAX_MESSAGE_LENGTH) {
    throw new Error(`${label} must be between 1 and ${MAX_MESSAGE_LENGTH} characters.`);
  }

  return { role: value.role, content };
};

const parseChatRequest = (value: unknown): { message: ChatMessage; history: ChatMessage[] } => {
  if (typeof value !== 'object' || value === null || !('message' in value) || !('history' in value)) {
    throw new Error('Request must include a message and history.');
  }

  const request = value as ChatRequest;
  if (typeof request.message !== 'string') {
    throw new Error('Message must be text.');
  }

  const messageText = request.message.trim();
  if (!messageText || messageText.length > MAX_MESSAGE_LENGTH) {
    throw new Error(`Message must be between 1 and ${MAX_MESSAGE_LENGTH} characters.`);
  }

  if (!Array.isArray(request.history) || request.history.length > MAX_HISTORY_MESSAGES) {
    throw new Error(`History must contain no more than ${MAX_HISTORY_MESSAGES} messages.`);
  }

  const history = request.history.map((item) => parseMessage(item, 'History message'));
  const totalLength = history.reduce((total, item) => total + item.content.length, messageText.length);
  if (totalLength > MAX_TOTAL_LENGTH) {
    throw new Error('Conversation history is too long. Clear the conversation and try again.');
  }

  return {
    message: { role: 'user', content: messageText },
    history,
  };
};

const getGeminiText = (payload: unknown): string | null => {
  if (typeof payload !== 'object' || payload === null || !('candidates' in payload) || !Array.isArray(payload.candidates)) {
    return null;
  }

  const candidate = payload.candidates[0];
  if (typeof candidate !== 'object' || candidate === null || !('content' in candidate)) {
    return null;
  }

  const content = candidate.content;
  if (typeof content !== 'object' || content === null || !('parts' in content) || !Array.isArray(content.parts)) {
    return null;
  }

  const text = content.parts
    .filter((part): part is { text: string } => typeof part === 'object' && part !== null && 'text' in part && typeof part.text === 'string')
    .map((part) => part.text)
    .join('')
    .trim();

  return text || null;
};

const isRateLimited = (clientId: string): boolean => {
  const now = Date.now();
  const recentRequests = (requestsByClient.get(clientId) ?? []).filter(
    (timestamp) => now - timestamp < RATE_LIMIT_WINDOW_MS,
  );

  if (recentRequests.length >= MAX_REQUESTS_PER_WINDOW) {
    requestsByClient.set(clientId, recentRequests);
    return true;
  }

  recentRequests.push(now);
  requestsByClient.set(clientId, recentRequests);
  return false;
};

const getClientId = (request: IncomingMessage): string => request.socket.remoteAddress ?? 'unknown-client';

const ecoMentorApi = (apiKey: string | undefined, model = 'gemini-2.5-flash'): Plugin => ({
  name: 'eco-mentor-api',
  configureServer(server: ViteDevServer) {
    server.middlewares.use(async (request, response, next) => {
      if (request.url?.split('?')[0] !== '/api/chat') {
        next();
        return;
      }

      if (request.method !== 'POST') {
        sendJson(response, 405, { error: 'Only POST requests are supported.' });
        return;
      }

      if (isRateLimited(getClientId(request))) {
        sendJson(response, 429, { error: 'Too many chat requests. Please wait a moment and try again.' });
        return;
      }

      if (!apiKey?.trim()) {
        sendJson(response, 503, {
          error: 'Live AI responses are unavailable. Add GEMINI_API_KEY to the server environment and restart Vite.',
        });
        return;
      }

      let parsedRequest: { message: ChatMessage; history: ChatMessage[] };
      try {
        const rawBody = await readBody(request);
        let body: unknown;
        try {
          body = JSON.parse(rawBody);
        } catch {
          throw new Error('Request body must be valid JSON.');
        }
        parsedRequest = parseChatRequest(body);
      } catch (error) {
        const message = error instanceof Error ? error.message : 'Invalid chat request.';
        sendJson(response, 400, { error: message });
        return;
      }

      const contents = [...parsedRequest.history, parsedRequest.message].map((chatMessage) => ({
        role: chatMessage.role === 'assistant' ? 'model' : 'user',
        parts: [{ text: chatMessage.content }],
      }));

      try {
        const controller = new AbortController();
        const timeout = setTimeout(() => controller.abort(), GEMINI_TIMEOUT_MS);
        const geminiResponse = await fetch(
          `https://generativelanguage.googleapis.com/v1beta/models/${encodeURIComponent(model)}:generateContent?key=${encodeURIComponent(apiKey)}`,
          {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            signal: controller.signal,
            body: JSON.stringify({
              systemInstruction: {
                role: 'system',
                parts: [{ text: SYSTEM_INSTRUCTION }],
              },
              contents,
              generationConfig: {
                temperature: 0.4,
                maxOutputTokens: 700,
              },
            }),
          },
        );
        clearTimeout(timeout);

        if (geminiResponse.status === 401 || geminiResponse.status === 403) {
          sendJson(response, 502, { error: 'Gemini rejected the server configuration. Check GEMINI_API_KEY and GEMINI_MODEL.' });
          return;
        }

        if (geminiResponse.status === 429) {
          sendJson(response, 429, { error: 'The mentor is busy right now. Please wait a moment and try again.' });
          return;
        }

        if (!geminiResponse.ok) {
          sendJson(response, 502, { error: 'The Gemini service could not answer right now. Please try again.' });
          return;
        }

        const payload: unknown = await geminiResponse.json();
        const text = getGeminiText(payload);
        if (!text) {
          sendJson(response, 502, { error: 'Gemini returned no text response. Please try again.' });
          return;
        }

        sendJson(response, 200, { reply: text });
      } catch (error) {
        const errorMessage = error instanceof Error && error.name === 'AbortError'
          ? 'The Gemini service took too long to respond. Please try again.'
          : 'The Gemini service is unreachable right now. Please try again.';
        sendJson(response, 503, { error: errorMessage });
      }
    });
  },
});

export default ecoMentorApi;
