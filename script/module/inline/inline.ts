/* eslint-disable no-restricted-syntax */
import fs from 'node:fs';
import { writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';

import Critters from 'critters';

import { getAllFile } from '../../global/util/file';

import type { AstroIntegration } from 'astro';

const inline = (): AstroIntegration => ({
  hooks:
  {
    'astro:build:done': async ({ dir: directory }) =>
    {
      const distributionPath = fileURLToPath(directory);
      // const cssFile = getAllFile(`${distributionPath}/_astro/`, [ '.css' ]);
      const htmlFile = getAllFile(distributionPath, [ '.html' ]);

      const critters = new Critters({
        inlineFonts: true,
        path: distributionPath,
        pruneSource: true,
        publicPath: 'http://localhost:4321'
      });

      for await (const file of htmlFile)
      {
        const fileContent = fs.readFileSync(file).toString();

        const inlined = await critters.process(fileContent);

        await writeFile(file, Buffer.from(inlined.replace('data-critters-container', ''), 'utf8'));
      }
    }
  },
  name: 'inline'
});

export { inline };