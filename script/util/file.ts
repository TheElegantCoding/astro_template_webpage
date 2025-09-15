import fs from 'node:fs';
import path from 'node:path';

const findAllFiles = (extension: string, directory = 'public') =>
{
  const dirname = path.resolve();
  const filesPath = path.join(dirname, `/${directory}`);
  const resultFiles = fs.readdirSync(filesPath, { recursive: true });
  const filterFiles = resultFiles.filter((element) => element.includes(extension.toLowerCase()));
  const result = filterFiles.map((element) => `${directory}\\${element.toString()}`);

  return result;
};

export { findAllFiles };