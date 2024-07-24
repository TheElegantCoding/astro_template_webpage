import fs from 'node:fs';
import { writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';

import Critters from 'critters';

import { getAllFile } from '../../global/util/file';

type InlineCss =
{
  directory: URL;
  prefixPath?: string;
};

const inlineCss = async ({ directory, prefixPath }: InlineCss) =>
{
  const distributionPath = fileURLToPath(directory);
  const htmlFile = getAllFile(distributionPath, [ '.html' ]);

  const critters = new Critters({
    inlineFonts: true,
    logLevel: 'silent',
    path: distributionPath,
    pruneSource: true,
    publicPath: prefixPath
  });

  await Promise.all(htmlFile.map(async (file) =>
  {
    const fileContent = fs.readFileSync(file).toString();

    const inlined = await critters.process(fileContent);

    await writeFile(file, Buffer.from(inlined.replace('data-critters-container', ''), 'utf8'));
  }));
};

export { inlineCss };