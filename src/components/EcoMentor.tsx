import { FormEvent, KeyboardEvent, useState } from 'react';
import { Link } from 'react-router-dom';
import { Bot, Check, Clipboard, Leaf, Loader2, Send, Sparkles, Trash2, User, BookOpen, Lightbulb, Target, GraduationCap, HelpCircle, Zap } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

type Message = {
  id: number;
  role: 'user' | 'assistant';
  content: string;
};

type LearningMode = 'balanced' | 'simple' | 'detailed' | 'action' | 'project' | 'quiz';

const learningModes: { id: LearningMode; label: string; icon: LucideIcon; description: string; prompt: string }[] = [
  { 
    id: 'balanced', 
    label: 'Balanced', 
    icon: BookOpen, 
    description: 'Clear and practical',
    prompt: ''
  },
  { 
    id: 'simple', 
    label: 'Simple', 
    icon: HelpCircle, 
    description: 'Easy to understand',
    prompt: 'Explain this in simple, easy-to-understand language suitable for beginners. Use clear examples and avoid jargon.'
  },
  { 
    id: 'detailed', 
    label: 'Detailed', 
    icon: GraduationCap, 
    description: 'Scientific depth',
    prompt: 'Provide a detailed, scientific explanation with facts, data, and comprehensive reasoning. Include relevant statistics where appropriate.'
  },
  { 
    id: 'action', 
    label: 'Action Plan', 
    icon: Target, 
    description: 'Step-by-step guide',
    prompt: 'Provide a clear, step-by-step action plan with practical steps I can implement immediately. Focus on concrete, actionable advice.'
  },
  { 
    id: 'project', 
    label: 'Projects', 
    icon: Lightbulb, 
    description: 'Student ideas',
    prompt: 'Suggest specific, realistic project ideas suitable for students. Include materials needed, steps to complete, and expected environmental impact.'
  },
  { 
    id: 'quiz', 
    label: 'Quiz Me', 
    icon: Zap, 
    description: 'Test knowledge',
    prompt: 'Quiz me on this topic. Ask me 3-5 questions to test my understanding, then provide the answers with explanations.'
  },
];

const suggestions = [
  'How can I reduce my carbon footprint?',
  'Explain climate change in simple words',
  'How can my college reduce plastic waste?',
  'Give me 5 water-saving methods',
  'Suggest an environmental project for students',
  'Explain renewable energy with examples',
  'What is biodiversity and why does it matter?',
  'Create a 7-day sustainability challenge',
];

const initialMessage: Message = {
  id: 1,
  role: 'assistant',
  content: 'Hi! I\'m your AI Eco-Mentor powered by Google Gemini. Ask me about sustainability, climate science, pollution, renewable energy, or practical environmental projects. Select a learning mode to customize how I respond!',
};

const EcoMentor = () => {
  const [messages, setMessages] = useState<Message[]>([initialMessage]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [failedMessage, setFailedMessage] = useState('');
  const [copiedId, setCopiedId] = useState<number | null>(null);
  const [learningMode, setLearningMode] = useState<LearningMode>('balanced');

  const sendMessage = async (event?: FormEvent, suggestedText?: string) => {
    event?.preventDefault();
    const displayContent = (suggestedText ?? input).trim();
    if (!displayContent || isLoading) {
      if (!displayContent) setError('Please enter a question for the Eco-Mentor.');
      return;
    }

    let content = displayContent;
    const modeConfig = learningModes.find(m => m.id === learningMode);
    if (modeConfig && modeConfig.prompt) {
      content = `${modeConfig.prompt}\n\nUser question: ${content}`;
    }

    setError('');
    setFailedMessage('');
    setInput('');
    const userMessage: Message = { id: Date.now(), role: 'user', content: displayContent };
    const conversation = [...messages, userMessage];
    setMessages(conversation);
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: content,
          history: messages
            .slice(1)
            .slice(-20)
            .map(({ role, content: text }) => ({ role, content: text })),
        }),
      });
      const payload = (await response.json()) as { reply?: string; error?: string };
      if (!response.ok || !payload.reply) {
        throw new Error(payload.error || 'The Eco-Mentor could not respond. Please try again.');
      }
      setMessages((current) => [...current, { id: Date.now() + 1, role: 'assistant', content: payload.reply }]);
    } catch (requestError) {
      setMessages((current) => current.filter((message) => message.id !== userMessage.id));
      setFailedMessage(displayContent);
      setError(requestError instanceof Error ? requestError.message : 'The Eco-Mentor could not respond. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      void sendMessage();
    }
  };

  const copyMessage = async (message: Message) => {
    await navigator.clipboard.writeText(message.content);
    setCopiedId(message.id);
    window.setTimeout(() => setCopiedId(null), 1500);
  };

  const clearConversation = () => {
    setMessages([{ ...initialMessage, id: Date.now() }]);
    setError('');
    setFailedMessage('');
    setInput('');
  };

  const activeModeConfig = learningModes.find(m => m.id === learningMode)!;

  return (
    <main className="min-h-screen bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50 px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[300px_1fr]">
        <aside className="space-y-6">
          <div className="rounded-3xl bg-white p-6 shadow-lg">
            <Link to="/" className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-emerald-600 transition">
              <Leaf className="h-5 w-5 text-emerald-500" />
              Back to EARTH-ED AI
            </Link>
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-400 to-teal-500">
              <Sparkles className="h-7 w-7 text-white" />
            </div>
            <h1 className="text-2xl font-bold text-gray-900">AI Eco-Mentor</h1>
            <p className="mt-3 text-sm leading-relaxed text-gray-600">
              Powered by Google Gemini for environmental education. Ask follow-up questions anytime!
            </p>
            <div className="mt-6 rounded-2xl border border-emerald-100 bg-emerald-50 p-4 text-sm text-emerald-800">
              <strong className="block mb-1">💡 Tip:</strong>
              <span className="text-emerald-700">Select a learning mode below to customize responses to your needs</span>
            </div>
            <button
              type="button"
              onClick={clearConversation}
              disabled={isLoading}
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl border border-gray-200 px-4 py-3 text-sm font-semibold text-gray-700 transition hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-50"
            >
              <Trash2 className="h-4 w-4" />
              Clear conversation
            </button>
          </div>

          {/* Learning Modes */}
          <div className="rounded-3xl bg-white p-6 shadow-lg">
            <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wide mb-4">Learning Mode</h3>
            <div className="space-y-2">
              {learningModes.map((mode) => {
                const Icon = mode.icon;
                const isActive = learningMode === mode.id;
                return (
                  <button
                    key={mode.id}
                    onClick={() => setLearningMode(mode.id)}
                    disabled={isLoading}
                    className={`w-full flex items-start gap-3 rounded-xl p-3 text-left transition ${
                      isActive 
                        ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-md' 
                        : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
                    } disabled:opacity-50`}
                  >
                    <Icon className={`h-5 w-5 flex-shrink-0 mt-0.5 ${isActive ? 'text-white' : 'text-emerald-600'}`} />
                    <div className="flex-1 min-w-0">
                      <div className={`text-sm font-semibold ${isActive ? 'text-white' : 'text-gray-900'}`}>
                        {mode.label}
                      </div>
                      <div className={`text-xs ${isActive ? 'text-emerald-50' : 'text-gray-500'}`}>
                        {mode.description}
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </aside>

        <section className="flex min-h-[720px] flex-col overflow-hidden rounded-3xl bg-white shadow-xl">
          <header className="border-b border-gray-100 bg-gradient-to-r from-emerald-600 to-teal-600 px-5 py-5 text-white sm:px-8">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="rounded-xl bg-white/15 p-2">
                  <Bot className="h-6 w-6" />
                </div>
                <div>
                  <h2 className="text-xl font-bold">Your Environmental Assistant</h2>
                  <p className="text-sm text-emerald-50">Get practical answers for a sustainable future</p>
                </div>
              </div>
              <div className="hidden sm:flex items-center gap-2 rounded-full bg-white/15 px-3 py-1.5">
                {(() => {
                  const Icon = activeModeConfig.icon;
                  return <Icon className="h-4 w-4 text-emerald-100" />;
                })()}
                <span className="text-xs font-medium text-emerald-50">{activeModeConfig.label}</span>
              </div>
            </div>
          </header>

          <div className="flex-1 space-y-5 overflow-y-auto p-4 sm:p-8">
            {messages.map((message) => (
              <div key={message.id} className={`flex gap-3 ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                {message.role === 'assistant' && (
                  <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-emerald-400 to-teal-500">
                    <Bot className="h-5 w-5 text-white" />
                  </div>
                )}
                <div className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${message.role === 'user' ? 'rounded-br-md bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-md' : 'rounded-bl-md bg-gray-100 text-gray-800'}`}>
                  <p className="whitespace-pre-wrap">{message.content}</p>
                  {message.role === 'assistant' && (
                    <button type="button" onClick={() => void copyMessage(message)} className="mt-3 inline-flex items-center gap-1 text-xs text-gray-500 hover:text-emerald-600 transition">
                      {copiedId === message.id ? <Check className="h-3.5 w-3.5" /> : <Clipboard className="h-3.5 w-3.5" />}
                      {copiedId === message.id ? 'Copied!' : 'Copy response'}
                    </button>
                  )}
                </div>
                {message.role === 'user' && (
                  <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-teal-100">
                    <User className="h-5 w-5 text-teal-700" />
                  </div>
                )}
              </div>
            ))}
            {isLoading && (
              <div className="flex items-center gap-3 text-sm text-gray-500">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-emerald-400 to-teal-500">
                  <Bot className="h-5 w-5 text-white" />
                </div>
                <div className="flex items-center gap-2 rounded-2xl bg-gray-100 px-4 py-3">
                  <Loader2 className="h-4 w-4 animate-spin text-emerald-600" />
                  <span className="text-gray-700">Eco-Mentor is thinking...</span>
                </div>
              </div>
            )}
          </div>

          <div className="border-t border-gray-100 p-4 sm:p-6">
            {error && (
              <div role="alert" className="mb-3 rounded-xl bg-red-50 border border-red-100 px-4 py-3 text-sm text-red-700 flex items-start gap-2">
                <span className="font-semibold">⚠️</span>
                <span className="flex-1">{error}</span>
                {failedMessage && (
                  <button
                    type="button"
                    onClick={() => void sendMessage(undefined, failedMessage)}
                    disabled={isLoading}
                    className="font-semibold underline underline-offset-2 hover:text-red-900 disabled:opacity-50"
                  >
                    Retry
                  </button>
                )}
              </div>
            )}
            
            {/* Suggested Questions */}
            <div className="mb-4">
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">Suggested questions:</p>
              <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
                {suggestions.map((suggestion) => (
                  <button
                    key={suggestion}
                    type="button"
                    onClick={() => void sendMessage(undefined, suggestion)}
                    disabled={isLoading}
                    className="whitespace-nowrap rounded-full border-2 border-emerald-200 bg-emerald-50 px-3 py-2 text-xs font-medium text-emerald-700 transition hover:bg-emerald-100 hover:border-emerald-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {suggestion}
                  </button>
                ))}
              </div>
            </div>

            {/* Input Form */}
            <form onSubmit={(event) => void sendMessage(event)} className="flex items-end gap-3">
              <textarea
                value={input}
                onChange={(event) => { setInput(event.target.value); setError(''); }}
                onKeyDown={handleKeyDown}
                maxLength={2000}
                rows={2}
                disabled={isLoading}
                placeholder="Ask the Eco-Mentor anything about sustainability..."
                className="min-h-[52px] flex-1 resize-none rounded-2xl border-2 border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 disabled:bg-gray-50 disabled:cursor-not-allowed"
                aria-label="Message the AI Eco-Mentor"
              />
              <button
                type="submit"
                disabled={isLoading || !input.trim()}
                className="inline-flex h-[52px] items-center gap-2 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-600 px-5 font-semibold text-white shadow-md transition hover:from-emerald-700 hover:to-teal-700 hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-50 disabled:shadow-none"
              >
                <Send className="h-4 w-4" />
                <span className="hidden sm:inline">Send</span>
              </button>
            </form>
            <div className="mt-2 flex items-center justify-between text-xs text-gray-400">
              <span>Press Enter to send • Shift+Enter for new line</span>
              <span>{input.length}/2000</span>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default EcoMentor;
