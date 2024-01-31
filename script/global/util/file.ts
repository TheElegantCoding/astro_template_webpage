import fs from 'node:fs';
import path from 'node:path';

const getAllFile = (base: string, extension: string[], array: string[] = []): string[] =>
{
  if(!fs.existsSync(base))
  {
    return [];
  }

  const file = fs.readdirSync(base, { recursive: true });
  const result = array;

  file.forEach((fileInfo) =>
  {
    const newBase = path.join(base, fileInfo.toString());

    if(fs.statSync(newBase).isDirectory())
    {
      getAllFile(newBase, extension, result);

      return;
    }

    if(extension.includes(fileInfo.toString().slice(Math.max(0, fileInfo.lastIndexOf('.')))))
    {
      result.push(newBase);
    }
  });

  return result;
};

export { getAllFile };