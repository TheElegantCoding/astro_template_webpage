import { findAllFiles } from '@script/util/file';
import sharp from 'sharp';

const convertImage = () => {
  const publicImageFiles = findAllFiles('.png');
  const sourceImageFiles = findAllFiles('.png', '/src');

  const excludedKeywords = [
    'pwa',
    'web-app-manifest',
    'apple-touch',
    'opg',
    'favicon'
  ];

  const image = [...sourceImageFiles, ...publicImageFiles];

  image.forEach(async (file) => {
    if (excludedKeywords.some((keyword) => { return file.includes(keyword); })) {
      return;
    }

    await sharp(file)
      .webp({ quality: 80 })
      .toFile(file.replace('.png', '.webp'));

    await sharp(file)
      .avif({ quality: 70 })
      .toFile(file.replace('.png', '.avif'));
  });
};

convertImage();