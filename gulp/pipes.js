import plumber from 'gulp-plumber';

export const Scripts = (source, callback) => {
  return source
    .pipe(plumber())
    .on('end', () => typeof callback === 'function' && callback());
};
