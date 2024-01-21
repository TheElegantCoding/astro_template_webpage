import elegantCoding from 'eslint-config-elegant-coding';

export default elegantCoding({
  astro: true,
  html: true,
  ignore: [ 'postcss.config.cjs' ],
  json: true,
  jsxA11y: true,
  qwik: true,
  stylistic: true,
  typescript: true,
  yml: true
});