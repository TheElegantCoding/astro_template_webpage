import eslintConfig from 'eslint-config-universal-code';

const config = eslintConfig({
  astro: true,
  json: true,
  stylistic: true,
  unicorn: true,
  yml: true,
  perfectionist: true,
  typescript: true,
  ignore: ['postcss.config.cjs']
});

export default config;