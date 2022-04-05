import gulp from 'gulp';
import plumber from 'gulp-plumber';
import concat from 'gulp-concat';
import ts from 'gulp-typescript';

const tsProject = ts.createProject('tsconfig.json', {
  declaration: true,
});

export const Scripts = (source, dest, callback) => {
  return source
    .pipe(plumber())
    .pipe(concat('index.ts'))
    .pipe(tsProject())
    .js.pipe(gulp.dest(dest))
    .on('end', () => typeof callback === 'function' && callback());
};
