import { inlineCss } from './inline_css';

import type { AstroIntegration } from 'astro';

type InlineConfig =
{
  prefixPath?: string;
};

const inline = (options?: InlineConfig): AstroIntegration => ({
  hooks:
  {
    'astro:build:done': async ({ dir: directory }) =>
    {
      await inlineCss({
        directory,
        prefixPath: options?.prefixPath
      });
    }
  },
  name: 'inline'
});

export { inline };