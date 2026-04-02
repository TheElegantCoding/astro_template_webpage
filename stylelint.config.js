import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);

const baseRaw = require('stylelint-config-universal-code');
const sassRaw = require('stylelint-config-universal-code/sass');

const baseConfig = baseRaw.default;
const sassConfig = sassRaw.default;

const config = {
  extends: [baseConfig, sassConfig],
  customSyntax: 'postcss-scss',
  ignoreFiles: [
    'node_modules/**',
    'dist/**',
    '.astro/**',
    '**/_normalize.scss',
    '**/_reset.scss',
    '**/vendor/**',
    '**/*.log'
  ],
  rules: {}
};

export default config;