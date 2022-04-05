import fs from 'fs';
import gulp from 'gulp';
import concat from 'gulp-concat';
import * as Paths from './paths';
import * as Pipes from './pipes';
import ts from 'gulp-typescript';

const tsProject = ts.createProject('tsconfig.json', {
  declaration: true,
});

export const clear = callback => {
  if (fs.existsSync(Paths.Folders.lib))
    fs.rmSync(Paths.Folders.lib, { recursive: true });
  if (typeof callback === 'function') callback();
};

export const scripts = callback => {
  const source = gulp
    .src(['./src/index.ts', './src/utils/**/*.ts', '!src/**/*.test.ts'])
    .pipe(concat('index.ts'))
    .pipe(tsProject())
    .js.pipe(gulp.dest('lib'));

  return Pipes.Scripts(source, () => {
    if (typeof callback === 'function') callback();
  });
};

export const vtexUtils = callback => {
  const source = gulp
    .src(['./src/vtex/index.ts', './src/vtex/**/*.ts', '!src/**/*.test.ts'])
    .pipe(concat('index.ts'))
    .pipe(tsProject())
    .js.pipe(gulp.dest('vtex'));

  return Pipes.Scripts(source, () => {
    if (typeof callback === 'function') callback();
  });
};
