const autoprefixer = require('autoprefixer');
const purgecss = require('@fullhuman/postcss-purgecss');

module.exports = {
  plugins: [
    purgecss({
      content: [
        './src/**/*.astro',
        './src/**/*.{tsx,ts,jsx,js}',
        './src/**/*.html'
      ],
      safelist: {
        standard: [
          /^delay-/,
          /active$/,
          /loading$/,
          /visible$/
        ]
      },
      dynamicAttributes: ['data-animate'],
      fontFace: true,
      keyframes: true,
      variables: true,
      rejected: true
    }),
    autoprefixer()
  ]
};