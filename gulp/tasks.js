import fs from 'fs';
import gulp from 'gulp';
import * as Paths from './paths';
import * as Pipes from './pipes';

export const clear = callback => {
  if (fs.existsSync(Paths.Folders.lib))
    fs.rmSync(Paths.Folders.lib, { recursive: true });
  if (typeof callback === 'function') callback();
};

export const compileUtils = callback => {
  const source = gulp.src([
    './src/index.ts',
    './src/utils/**/*.ts',
    '!src/**/*.test.ts',
  ]);

  return Pipes.Scripts(source, 'lib', () => {
    if (typeof callback === 'function') callback();
  });
};

export const compileVtex = callback => {
  const source = gulp.src([
    './src/vtex/index.ts',
    './src/vtex/**/*.ts',
    '!src/**/*.test.ts',
  ]);

  return Pipes.Scripts(source, 'vtex', () => {
    if (typeof callback === 'function') callback();
  });
};
