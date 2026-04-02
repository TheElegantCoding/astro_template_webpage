import partytown from '@astrojs/partytown';
import sitemap from '@astrojs/sitemap';
import { classShortener } from 'astro-class-shortener';
import { inlineCss } from 'astro-inline-css';
import { defineConfig } from 'astro/config';
import { resolve } from 'node:path';
import { loadEnv } from 'vite';

const environment = loadEnv(process.env.NODE_ENV ?? 'development', './src/global/env', '');
const dirname = resolve();

export default defineConfig({
  build: {
    assetsPrefix: process.env.NODE_ENV === 'production' ? environment.BASE_URL : undefined,
    inlineStylesheets: 'never'
  },
  integrations: [
    sitemap({ lastmod: new Date() }),
    partytown({ config: { forward: ['gtag', 'dataLayer.push'] } }),
    inlineCss({ prefixPath: environment.BASE_URL }),
    classShortener()
  ],
  security: { csp: true },
  output: 'static',
  server: {
    host: true,
    open: true
  },
  site: environment.BASE_URL,
  trailingSlash: 'never',
  vite: {
    envDir: './src/global/env',
    css: {
      preprocessorOptions: {
        scss: { loadPaths: [resolve(dirname, 'src')] }
      }
    }
  }
});