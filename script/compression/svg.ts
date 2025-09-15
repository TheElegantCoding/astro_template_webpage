import fs from 'node:fs';

import { findAllFiles } from '@script/util/file';
import { optimize } from 'svgo';

const compressSvg = () =>
{
  const publicSvgFiles = findAllFiles('.svg');
  const sourceSvgFiles = findAllFiles('.svg', '/src');

  const svg = [ ...publicSvgFiles, ...sourceSvgFiles ];

  svg.forEach((file) =>
  {
    const svgString = fs.readFileSync(file, 'utf8');

    const result = optimize(svgString, {
      multipass: true,
      path: file,
      plugins: [ 'preset-default' ]
    });

    fs.writeFileSync(file, result.data);
  });
};

compressSvg();