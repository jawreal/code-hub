import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    minify: 'esbuild',
    chunkSizeWarningLimit: 2000, 
    rollupOptions: {
      output: {
        manualChunks: {
          'markdown-editor': ['@uiw/react-md-editor']
        }
      }
    }
  }
});