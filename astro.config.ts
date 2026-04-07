import partytown from '@astrojs/partytown';
import sitemap from '@astrojs/sitemap';
import astroPWA from '@vite-pwa/astro';
import { classShortener } from 'astro-class-shortener';
import { inlineCss } from 'astro-inline-css';
import { defineConfig } from 'astro/config';
import { resolve } from 'node:path';

import { environmentData } from './script/validation/environment';
import { siteConfiguration } from './src/global/configuration/site_configuration';

const { BASE_URL, PORT, NODE_ENV: ENV } = environmentData;
const dirname = resolve();

export default defineConfig({
  build: {
    assetsPrefix: BASE_URL,
    inlineStylesheets: 'never'
  },
  integrations: [
    sitemap({ lastmod: new Date() }),
    partytown({
      config: {
        forward: ['gtag', 'dataLayer.push'],
        debug: ENV === 'development'
      }
    }),
    inlineCss({
      prefixPath: BASE_URL,
      csp: true,
      cspHashPlaceholder: 'sha256-INLINE_CSS_HASH'
    }),
    classShortener(),
    astroPWA({
      base: ENV === 'production' ? `${BASE_URL}/` : '/',
      injectRegister: 'script',
      registerType: 'autoUpdate',
      disable: ENV === 'development',
      manifest: {
        name: siteConfiguration.siteName,
        short_name: siteConfiguration.shortName,
        description: siteConfiguration.description,
        orientation: siteConfiguration.orientation,
        start_url: ENV === 'production' ? BASE_URL : '/',
        theme_color: siteConfiguration.themeColor,
        background_color: siteConfiguration.backgroundColor,
        lang: siteConfiguration.defaultLanguage,
        display: siteConfiguration.display,
        icons: siteConfiguration.icons,
        screenshots: siteConfiguration.screenshots
      },
      devOptions: {
        enabled: ENV === 'development',
        type: 'module',
        navigateFallback: 'index.html'
      },
      workbox: {
        globIgnores: [
          '**/404.html',
          '404.html',
          '404'
        ],
        globPatterns: ['**/*.{js,css,html,ico,png,svg,woff2}'],
        navigateFallback: '/index.html',
        runtimeCaching: [{
          urlPattern: /\/404/,
          handler: 'NetworkOnly'
        }],
        importScripts: ['https://storage.googleapis.com/workbox-cdn/releases/7.0.0/workbox-sw.js']
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
    open: true,
    port: PORT
  },
  site: BASE_URL,
  trailingSlash: 'never',
  vite: {
    envDir: './src/global/env',
    build: {
      assetsInlineLimit: 0,
      rollupOptions: {
        output: {
          manualChunks (id) {
            if (id.includes('node_modules')) {
              return 'vendor';
            }
            return null;
          }
        }
      }
    },
    css: {
      preprocessorOptions: {
        scss: { loadPaths: [resolve(dirname, 'src')] }
      }
    }
  }
});