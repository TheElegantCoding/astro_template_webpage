import { defineConfig } from 'astro/config';
import { loadEnv } from 'vite';

const environment = loadEnv(process.env.NODE_ENV ?? 'development', './src/global/env', '');

export default defineConfig({
  build: {
    assetsPrefix: 'https://cdn.example.com',
    inlineStylesheets: 'never'
  },
  site: environment.VITE_BASE_URL,
  vite:
  {
    base: environment.VITE_BASE_URL,
    envDir: './src/global/env'
  }
});