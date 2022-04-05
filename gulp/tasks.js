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
    './src/utils/**/*.ts',
    '!src/**/index.ts',
    '!src/**/*.test.ts',
    '!src/**/*.types.ts',
  ]);

  return Pipes.Scripts(source, 'lib', () => {
    if (typeof callback === 'function') callback();
  });
};

export const compileVtex = callback => {
  const source = gulp.src([
    './src/vtex/**/*.ts',
    '!src/**/index.ts',
    '!src/**/*.test.ts',
    '!src/**/*.types.ts',
  ]);

  return Pipes.Scripts(source, 'vtex', () => {
    if (typeof callback === 'function') callback();
  });
};
