import { pwaConfiguration } from './pwa_configuration';

const siteConfiguration = {
  author: {
    email: 'astralysoftware@gmail.com',
    name: 'Astralys Software',
    web: 'astralysoftware.com'
  },
  copyright: `© ${new Date().getFullYear()} Astralys Software`,
  defaultLanguage: 'es',
  description: '',
  googleAnalyticId: '',
  languages: { es: 'Español' },
  ...pwaConfiguration
};

export { siteConfiguration };