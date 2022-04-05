import gulp from 'gulp';
import plumber from 'gulp-plumber';
import concat from 'gulp-concat';
import sourcemaps from 'gulp-sourcemaps';
import merge from 'merge-stream';
import ts from 'gulp-typescript';

const tsProject = ts.createProject('tsconfig.json', {
  declaration: true,
});

export const Scripts = (source, dest, callback) => {
  const tsResult = source
    .pipe(plumber())
    .pipe(concat('index.ts'))
    .pipe(sourcemaps.init())
    .pipe(tsProject());

  return merge([
    tsResult.js.pipe(sourcemaps.write('.')).pipe(gulp.dest(`./${dest}`)),
    tsResult.dts.pipe(gulp.dest(`./${dest}`)),
  ]).on('end', () => typeof callback === 'function' && callback());
};
