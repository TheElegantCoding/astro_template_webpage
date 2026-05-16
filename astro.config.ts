import partytown from '@astrojs/partytown';
import sitemap from '@astrojs/sitemap';
import { classShortener } from 'astro-class-shortener';
import { compress } from 'astro-crush';
import { inlineCss } from 'astro-inline-css';
import { defineConfig } from 'astro/config';
import { resolve } from 'node:path';

import { environment } from './src/global/configuration/environment_configuration';

const { BASE_URL, PORT, NODE_ENV: ENV } = environment;
const dirname = resolve();

export default defineConfig({
  build: {
    assetsPrefix: BASE_URL,
    inlineStylesheets: 'never'
  },
  integrations: [
    partytown({
      config: {
        forward: ['gtag', 'dataLayer.push'],
        debug: ENV === 'development'
      }
    }),
    classShortener(),
    inlineCss({
      prefixPath: BASE_URL,
      csp: true,
      cspHashPlaceholder: 'sha256-INLINE_CSS_HASH'
    }),
    sitemap({ lastmod: new Date() }),
    compress()
  ],
  security: {
    csp: {
      directives: [
        "object-src 'none'",
        "frame-ancestors 'none'",
        "base-uri 'self'"
      ],
      styleDirective: {
        hashes: ['sha256-INLINE_CSS_HASH']
      }
    }
  },
  output: 'static',
  server: {
    host: true,
    open: true,
    port: PORT
  },
  site: BASE_URL,
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