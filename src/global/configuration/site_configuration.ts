const siteConfiguration = {
  metaAuthor: {
    author: {
      email: 'astralysoftware@gmail.com',
      name: 'Astralys Software',
      web: 'astralysoftware.com'
    },
    copyright: `© ${new Date().getFullYear()} Astralys Software`
  },
  i18n: {
    defaultLanguage: 'es',
    languages: ['es']
  },
  openGraph: {
    siteName: 'Astralight',
    type: 'website',
    image: {
      alt: 'Astralight',
      height: 630,
      url: '/asset/opg/opg.png',
      secureImageUrl: '/asset/opg/opg.png',
      width: 1200
    }
  },
  favicon: {
    apple: '/asset/favicon/apple-touch-icon.png',
    ico: '/asset/favicon/favicon.ico',
    manifest: '/asset/favicon/site.webmanifest',
    png: '/asset/favicon/favicon.png',
    svg: '/asset/favicon/favicon.svg'
  },
  siteName: 'Astralight',
  description: '',
  googleAnalyticId: ''
};

export { siteConfiguration };