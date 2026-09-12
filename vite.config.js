import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  base: '/',
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: false, // usamos public/manifest.json
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg,webp,jpg}'],
        // Los bancos de preguntas son grandes: se cachean bajo demanda, no en el precache
        maximumFileSizeToCacheInBytes: 3 * 1024 * 1024,
        navigateFallback: null,
      },
    }),
  ],
  build: {
    outDir: 'dist',
    sourcemap: false,
  },
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: './src/setupTests.js',
    include: ['src/**/*.{test,spec}.{js,jsx}'],
  },
});
