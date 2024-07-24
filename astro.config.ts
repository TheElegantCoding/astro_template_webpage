import partytown from '@astrojs/partytown';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';
import { loadEnv } from 'vite';

import { inline } from './script/module/inline/inline';

const environment = loadEnv(process.env.NODE_ENV ?? 'development', './src/global/env', '');

export default defineConfig({
  build:
  {
    assetsPrefix: process.env.NODE_ENV === 'production' ? environment.BASE_URL : undefined,
    inlineStylesheets: 'never'
  },
  integrations:
  [
    sitemap(),
    partytown({ config: { forward: [ 'dataLayer.push' ] } }),
    inline({ prefixPath: environment.BASE_URL })
  ],
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