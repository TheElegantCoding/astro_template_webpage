const autoprefixer = require('autoprefixer');
const purgecss = require('@fullhuman/postcss-purgecss');
const combineQueries = require('postcss-combine-media-query');

module.exports = {
  plugins: [
    purgecss({
      content: [
        './src/**/*.astro',
        './src/**/*.{tsx,ts,jsx,js}',
        './src/**/*.html',
        './public/**/*.html',
      ],
      safelist: {
        standard: [
          /^delay-/,
          /active$/,
          /lenis/,
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
    autoprefixer(),
    combineQueries()
  ]
};