import { findAllFiles } from '@script/util/file';
import fs from 'node:fs';
import path from 'node:path';
import { optimize } from 'svgo';

const compressSvg = () => {
  const publicSvgFiles = findAllFiles('.svg');
  const sourceSvgFiles = findAllFiles('.svg', '/src');

  const svg = [...publicSvgFiles, ...sourceSvgFiles];

  svg.forEach((file) => {
    const cleanRelativePath = file.replace(/^[/\\]+/, '');
    const filePath = path.resolve(process.cwd(), cleanRelativePath);
    const svgString = fs.readFileSync(filePath, 'utf8');

    const result = optimize(svgString, {
      multipass: true,
      path: file,
      plugins: ['preset-default']
    });

    fs.writeFileSync(filePath, result.data);
  });
};

compressSvg();