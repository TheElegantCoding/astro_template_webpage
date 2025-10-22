import fs from 'node:fs';
import { writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';

import Beasties from 'beasties';

import { findAllFiles } from '../util/file';

type InlineCss = {
  directory: URL;
  prefixPath?: string;
};

const inlineCss = async ({ directory, prefixPath }: InlineCss) =>
{
  const distributionPath = fileURLToPath(directory);
  const htmlFile = findAllFiles('.html', distributionPath);

  const beasties = new Beasties({
    inlineFonts: true,
    logLevel: 'silent',
    path: distributionPath,
    pruneSource: true,
    publicPath: prefixPath
  });

  await Promise.all(htmlFile.map(async (file) =>
  {
    const fileContent = fs.readFileSync(file).toString();

    const inlined = await beasties.process(fileContent);

    await writeFile(file, Buffer.from(inlined.replace('data-beasties-container', ''), 'utf8'));
  }));
};

export { inlineCss };