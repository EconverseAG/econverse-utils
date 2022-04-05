import gulp from 'gulp';
import plumber from 'gulp-plumber';
import concat from 'gulp-concat';
import sourcemaps from 'gulp-sourcemaps';
import merge from 'merge-stream';
import ts from 'gulp-typescript';
import map from 'map-stream';

const tsProject = ts.createProject('tsconfig.json', {
  declaration: true,
  isolatedModules: false,
  rootDir: '.',
});

const uniqueFilterFn = function (item, idx, all) {
  return (
    idx === all.indexOf(item) || item.indexOf('__importDefault(require') === -1
  );
};

export const Scripts = (source, dest) => {
  const tsResult = source
    .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(tsProject());

  const js = tsResult.js
    .pipe(concat(`index.js`))
    .pipe(
      map(function (file, cb) {
        const contents = file.contents.toString();
        const lines = contents.split(/[\r\n]/);
        const uniqueLines = lines.filter(uniqueFilterFn);
        const output = uniqueLines.join('\n');
        const buffer = new Buffer.from(output, 'binary');

        file.contents = buffer;

        return cb(null, file);
      }),
    )
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(dest));

  const dts = tsResult.dts.pipe(concat(`index.d.ts`)).pipe(gulp.dest(dest));

  return merge(js, dts);
};
