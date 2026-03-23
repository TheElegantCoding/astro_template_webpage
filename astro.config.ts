import { resolve } from 'node:path';

import partytown from '@astrojs/partytown';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';
import { loadEnv } from 'vite';

import { inline } from './script/inline/inline';

const environment = loadEnv(process.env.NODE_ENV ?? 'development', './src/global/env', '');
const dirname = resolve();

export default defineConfig({
  build:
  {
    assetsPrefix: process.env.NODE_ENV === 'production' ? environment.BASE_URL : undefined,
    inlineStylesheets: 'never'
  },
  integrations:
  [
    sitemap({ lastmod: new Date() }),
    partytown({ config: { forward: [ 'gtag', 'dataLayer.push' ] } }),
    inline({ prefixPath: environment.BASE_URL })
  ],
  security: { csp: true },
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
    envDir: './src/global/env',
    css: {
      preprocessorOptions: {
        scss: {
          loadPaths: [resolve(dirname, 'src')]
        }
      }
    },
  }
});