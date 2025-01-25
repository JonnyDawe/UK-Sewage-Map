/// <reference types="vitest" />
import { TanStackRouterVite } from '@tanstack/router-plugin/vite';
import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      jsxImportSource: '@emotion/react',
      plugins: [['@swc/plugin-emotion', {}]],
    }),
    tsconfigPaths(),
    TanStackRouterVite(),
  ],
  test: {
    globals: true,
    setupFiles: './src/test/setup.tsx',
    environment: 'jsdom',
  },
});
