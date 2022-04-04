import fs from 'fs';
import gulp from 'gulp';
import * as Paths from './paths';
import * as Pipes from './pipes';
import ts from 'gulp-typescript';

const tsProject = ts.createProject('tsconfig.json');

export const clear = callback => {
  if (fs.existsSync(Paths.Folders.lib))
    fs.rmSync(Paths.Folders.lib, { recursive: true });
  if (typeof callback === 'function') callback();
};

export const scripts = callback => {
  const source = tsProject.src().pipe(tsProject()).js.pipe(gulp.dest('lib'));

  return Pipes.Scripts(source, () => {
    if (typeof callback === 'function') callback();
  });
};
