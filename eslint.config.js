import elegantCoding from 'eslint-config-elegant-coding';

// eslint-disable-next-line ts/no-unsafe-call
export default elegantCoding({
  astro: true,
  html: true,
  ignore: [ 'postcss.config.cjs' ],
  json: true,
  stylistic: true,
  typescript: true,
  yml: true
});