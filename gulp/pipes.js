import gulp from 'gulp';
import plumber from 'gulp-plumber';
import concat from 'gulp-concat';
import sourcemaps from 'gulp-sourcemaps';
import merge from 'merge-stream';
import ts from 'gulp-typescript';

const tsProject = ts.createProject('tsconfig.json', {
  declaration: true,
  isolatedModules: false,
  rootDir: '.',
});

export const Scripts = (source, dest) => {
  const tsResult = source
    .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(tsProject());

  const js = tsResult.js
    .pipe(concat(`index.js`))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(dest));

  const dts = tsResult.dts.pipe(concat(`index.d.ts`)).pipe(gulp.dest(dest));

  return merge(js, dts);
};
