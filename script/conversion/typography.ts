import { readFileSync, writeFileSync } from 'node:fs';
import path from 'node:path';

import { findAllFiles } from '@script/util/file';
import ttf2woff from 'ttf2woff';

const convertTypography = () =>
{
  const ttfFiles = findAllFiles('.ttf');

  ttfFiles.forEach((ttfFile) =>
  {
    const dirname = path.resolve();
    const filePath = path.join(dirname, ttfFile);
    const ttfBuffer = readFileSync(filePath);
    const woff = ttf2woff(new Uint8Array(ttfBuffer));
    const woff2: Buffer = ttf2woff(ttfBuffer);

    writeFileSync(filePath.replace('.ttf', '.woff2'), woff2);
    writeFileSync(filePath.replace('.ttf', '.woff'), woff);
  });
};

convertTypography();