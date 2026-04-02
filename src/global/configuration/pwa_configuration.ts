import type { PwaConfigurationType } from '@global/type/configuration_type';

const pwaConfiguration: PwaConfigurationType = {
  siteName: 'AstraLight',
  shortName: 'AstraLight',
  themeColor: '#030712',
  backgroundColor: '#ffffff',
  display: 'standalone',
  orientation: 'portrait',
  icons: [{
    src: '/asset/favicon/web-app-manifest-192x192.png',
    sizes: '192x192',
    type: 'image/png',
    purpose: 'maskable'
  }, {
    src: '/asset/favicon/web-app-manifest-512x512.png',
    sizes: '512x512',
    type: 'image/png',
    purpose: 'maskable'
  }],
  screenshots: [{
    src: '/asset/pwa/pwa_desktop.png',
    sizes: '1280x720',
    type: 'image/png',
    form_factor: 'wide',
    label: 'AstraLight'
  }, {
    src: '/asset/pwa/pwa_phone.png',
    sizes: '390x844',
    type: 'image/png',
    form_factor: 'narrow',
    label: 'AstraLight'
  }]
};

export { pwaConfiguration };