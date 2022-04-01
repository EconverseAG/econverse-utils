import { dest } from 'gulp';
import rollup from '@rollup/stream';
import rollup_babel from '@rollup/plugin-babel';
import rollup_resolve from '@rollup/plugin-node-resolve';
import rollup_commonjs from '@rollup/plugin-commonjs';
import rollup_strip from '@rollup/plugin-strip';
import rollup_json from '@rollup/plugin-json';
import buffer from 'vinyl-buffer';
import source from 'vinyl-source-stream';
import { getBabelRC } from './utils';

const Babel = {
  ...getBabelRC(),
  compact: false,
  sourceMaps: false,
  babelHelpers: 'runtime',
};

const Resolve = {
  browser: true,
  extensions: ['.ts', '.js', '.json'],
  customResolveOptions: { moduleDirectories: ['src'] },
};

const Strip = {
  debugger: true,
  sourceMap: false,
  labels: ['unittest'],
  functions: ['console.log', 'assert.*', 'debug'],
};

export const Bundle = file => {
  const path = file.path;
  const fileName = file.basename;
  const distPath = file.dirname.replace('src', 'dist');
  const options = {
    input: path,
    output: {
      sourcemap: false,
      name: fileName,
      format: 'umd',
      exports: 'named',
    },
    plugins: [
      rollup_commonjs(),
      rollup_json(),
      rollup_babel(Babel),
      rollup_resolve(Resolve),
      rollup_strip(Strip),
    ],
  };

  const Stream = rollup(options).pipe(source(fileName)).pipe(buffer());

  return Stream.pipe(dest(distPath));
};
