const autoprefixer = require('autoprefixer');
const mqpacker = require('@hail2u/css-mqpacker');
const purgecss = require("@fullhuman/postcss-purgecss");

module.exports =
{
  plugins: [
    autoprefixer(),
    mqpacker(),
    purgecss({
      content: [
        "./src/**/*.html",
        "./src/**/*.astro",
        "./src/**/*.tsx",
        "./src/**/*.ts"
      ],
      keyframes: true,
      fontFace: true,
      variables: true,
      dynamicAttributes: ["data-animate"]
    })
  ]
};