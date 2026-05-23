import { getImage } from 'astro:assets';

import type {
  ImageQuality,
  ImageMetadata,
  GetImageResult,
  ImageInputFormat
} from 'astro';

type LocalImageSource = ImageMetadata;

type OptimizableSource = string | LocalImageSource;

type HandleImageParameters = {
  readonly source: string;
  readonly sizes?: string;
  readonly width?: number;
  readonly height?: number;
  readonly formats: string[];
  readonly quality?: ImageQuality;
  readonly layout?: 'none' | 'fixed' | 'full-width' | 'constrained';
};

type GetOptimizedImagesParameters = Omit<HandleImageParameters, 'source'> & {
  readonly source: OptimizableSource;
};

const isExternalSource = (source: string) => {
  return source.startsWith('http://') || source.startsWith('https://');
};

const isLocalImageSource = (source: null | OptimizableSource): source is LocalImageSource => {
  return typeof source === 'object' && source !== null && 'src' in source && 'format' in source;
};

const findLocalImageSource = (source: string): undefined | LocalImageSource => {
  const allImages = import.meta.glob('/src/**/*.{jpeg,jpg,png,gif,webp,avif}', { eager: true });
  const allImagesTyped = allImages as Record<string, { default: LocalImageSource }>;
  const fullPath = Object.keys(allImagesTyped).find((path) => { return path.includes(source); }) as string;
  const rawFormat = fullPath.split('.').at(-1) as ImageInputFormat;
  const image = allImagesTyped[fullPath]?.default as LocalImageSource;

  return fullPath ? { ...image, format: rawFormat } : undefined;
};

const resolveImageSource = (source: string): OptimizableSource => {
  if (isExternalSource(source)) {
    return source;
  }

  const localImage = findLocalImageSource(source);

  if (!localImage) {
    throw new Error(`Image not found "${source}"`);
  }

  return localImage;
};

const getOptimizedImages = async ({
  source,
  quality,
  sizes,
  layout,
  formats,
  width,
  height
}: GetOptimizedImagesParameters) => {
  const formatImages = formats.map(async (format) => {
    const isLocal = isLocalImageSource(source);
    const finalWidth = width ?? (isLocal ? source.width : undefined);
    const finalHeight = height ?? (isLocal ? source.height : undefined);

    return getImage({
      src: source,
      quality,
      sizes,
      layout,
      inferSize: !width && !height,
      width: finalWidth,
      height: finalHeight,
      format
    });
  });

  return Promise.all(formatImages);
};

const handleImage = async ({
  source,
  sizes,
  quality,
  formats,
  layout
}: HandleImageParameters) => {
  const resultImage = resolveImageSource(source);
  const rawFormat = isExternalSource(source) ? null : (resultImage as LocalImageSource).format;
  const optimizedFormats = [...formats, rawFormat].filter((value) => { return value !== null; });

  const optimizedImages = await getOptimizedImages({
    source: resultImage,
    quality,
    sizes,
    layout,
    formats: optimizedFormats
  });

  return {
    image: optimizedImages.at(-1) as GetImageResult,
    sources: optimizedImages.slice(0, -1)
  };
};

export { handleImage };