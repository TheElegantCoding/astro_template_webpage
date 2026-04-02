import partytown from '@astrojs/partytown';
import sitemap from '@astrojs/sitemap';
import astroPWA from '@vite-pwa/astro';
import { classShortener } from 'astro-class-shortener';
import { inlineCss } from 'astro-inline-css';
import { defineConfig } from 'astro/config';
import { resolve } from 'node:path';
import { loadEnv } from 'vite';

import { siteConfiguration } from './src/global/configuration/site_configuration';

const environment = loadEnv(process.env.NODE_ENV ?? 'development', './src/global/env', '');
const BASE_URL = process.env.NODE_ENV === 'production' ? environment.BASE_URL : '/';
const dirname = resolve();

export default defineConfig({
  build: {
    assetsPrefix: BASE_URL,
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
      base: BASE_URL,
      registerType: 'autoUpdate',
      manifest: {
        name: siteConfiguration.siteName,
        short_name: siteConfiguration.shortName,
        description: siteConfiguration.description,
        orientation: siteConfiguration.orientation,
        start_url: BASE_URL,
        theme_color: siteConfiguration.themeColor,
        background_color: siteConfiguration.backgroundColor,
        lang: siteConfiguration.defaultLanguage,
        display: siteConfiguration.display,
        icons: siteConfiguration.icons,
        screenshots: siteConfiguration.screenshots
      },
      devOptions: {
        enabled: true,
        type: 'module',
        navigateFallback: 'index.html'
      },
      workbox: {
        importScripts: ['https://storage.googleapis.com/workbox-cdn/releases/7.0.0/workbox-sw.js'],
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