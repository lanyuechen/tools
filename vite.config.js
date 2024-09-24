import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

let base = '/';
if (process.env.NODE_ENV === 'production') {
  // base = '/tools/';
  base = 'https://cdn.jsdelivr.net/gh/lanyuechen/tools@gh-pages/';
}

// https://vitejs.dev/config/
export default defineConfig({
  base,
  server: {
    proxy: {
      '/ucp': {
        target: 'https://d4s-47.sensetime.com',
        changeOrigin: true,
        secure: false,
      },
    },
  },
  build: {
    assetsDir: '',
    rollupOptions: {
      output: {
        manualChunks: undefined
      }
    }
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  plugins: [
    react(),
  ],
})