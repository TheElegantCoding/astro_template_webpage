const replaceExtension = (file: string, extension: string): string =>
{
  const url = file.slice(Math.max(0, file.lastIndexOf('/') + 1));
  const fileExtension = url.split('.')[1];

  if(fileExtension)
  {
    return file.replace(fileExtension, extension);
  }

  return file;
};

export { replaceExtension };