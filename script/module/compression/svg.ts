import fs from 'node:fs';

import { getAllFile } from '@script/global/util/file';
import { optimize } from 'svgo';

const compressSvg = () =>
{
  const publicSvgImage = getAllFile('./public', [ '.svg' ]);
  const assetSvgImage = getAllFile('./src/global/asset', [ '.svg' ]);

  console.log('svg public images', publicSvgImage);

  const svg = [ ...publicSvgImage, ...assetSvgImage ];

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