import fs from 'fs';
import path from 'path';

export const getBabelRC = () =>
  JSON.parse(fs.readFileSync(path.resolve(__dirname, '../.babelrc'), 'utf8'));
