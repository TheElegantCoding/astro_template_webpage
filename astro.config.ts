import partytown from '@astrojs/partytown';
import sitemap from '@astrojs/sitemap';
import astroPWA from '@vite-pwa/astro';
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
    inlineCss({
      prefixPath: environment.BASE_URL,
      csp: true,
      cspHashPlaceholder: 'sha256-INLINE_CSS_HASH'
    }),
    classShortener(),
    astroPWA({
      base: environment.BASE_URL,
      registerType: 'autoUpdate',
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg,webp,avif}'],
        navigateFallback: '/404'
      }
    })
  ],
  security: {
    csp: {
      directives: ["object-src 'none'"],
      styleDirective: {
        hashes: ['sha256-INLINE_CSS_HASH']
      }
    }
  },
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