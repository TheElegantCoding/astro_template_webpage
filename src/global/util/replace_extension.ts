const replaceExtension = (file: string, extension: string): string =>
{
  const lastDotIndex = file.lastIndexOf('.');
  const lastIndex = -1;

  if(lastDotIndex === lastIndex || lastDotIndex === 0)
  {
    return file;
  }

  const cleanExtension = extension.startsWith('.') ? extension.slice(1) : extension;

  return `${file.slice(0, Math.max(0, lastDotIndex))}.${cleanExtension}`;
};

export { replaceExtension };