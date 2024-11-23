const autoprefixer = require('autoprefixer');
const purgecss = require('@fullhuman/postcss-purgecss').default;

module.exports =
{
  plugins: [
    autoprefixer(),
    purgecss({
      content: [
        './src/**/*.html',
        './src/**/*.astro',
        './src/**/*.tsx',
        './src/**/*.ts'
      ],
      dynamicAttributes: [ 'data-animate' ],
      fontFace: true,
      keyframes: true,
      variables: true
    })
  ]
};