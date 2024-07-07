import partytown from '@astrojs/partytown';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';
import { loadEnv } from 'vite';

const environment = loadEnv(process.env.NODE_ENV ?? 'development', './src/global/env', '');

export default defineConfig({
  build:
  {
    assetsPrefix: process.env.NODE_ENV === 'production' ? environment.BASE_URL : undefined,
    inlineStylesheets: 'never'
  },
  integrations:
  [ sitemap(), partytown({ config: { forward: [ 'dataLayer.push' ] } }) ],
  output: 'static',
  server:
  {
    host: true,
    open: true
  },
  site: environment.BASE_URL,
  trailingSlash: 'never',
  vite:
  {
    envDir: './src/global/env'
  }
});