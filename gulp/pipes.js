import gulp_tap from 'gulp-tap';
import plumber from 'gulp-plumber';
import { Bundle } from './rollup';

export const Scripts = (source, callback) => {
  return source
    .pipe(plumber())
    .pipe(
      gulp_tap(file =>
        Bundle(file).on('end', () => {
          if (typeof callback === 'function') callback();
        }),
      ),
    )
    .on('end', () => typeof callback === 'function' && callback());
};
