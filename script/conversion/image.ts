import { findAllFiles } from '@script/util/file';
import sharp from 'sharp';

const convertImage = () =>
{
  const publicImageFiles = findAllFiles('.png');
  const sourceImageFiles = findAllFiles('.png', '/src');

  const image = [ ...sourceImageFiles, ...publicImageFiles ];

  image.forEach(async (file) =>
  {
    await sharp(file)
      .webp({ quality: 80 })
      .toFile(file.replace('.png', '.webp'));

    await sharp(file)
      .avif({ quality: 70 })
      .toFile(file.replace('.png', '.avif'));
  });
};

convertImage();