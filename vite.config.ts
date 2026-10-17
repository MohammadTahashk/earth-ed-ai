import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import ecoMentorApi from './server/ecoMentorApi';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');

  return {
    plugins: [react(), ecoMentorApi(env.GEMINI_API_KEY, env.GEMINI_MODEL)],
    optimizeDeps: {
      exclude: ['lucide-react'],
    },
  };
});
