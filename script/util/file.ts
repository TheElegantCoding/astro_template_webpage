import fs from 'node:fs';
import path from 'node:path';

const findAllFiles = (extension: string, directory = 'public') => {
  const root = process.cwd();
  const filesPath = path.join(root, directory);
  const resultFiles = fs.readdirSync(filesPath, { recursive: true });
  const filterFiles = resultFiles.filter((element) => { return element.includes(extension.toLowerCase()); });
  const result = filterFiles.map((element) => { return path.join(directory, element.toString()); });

  return result;
};

export { findAllFiles };