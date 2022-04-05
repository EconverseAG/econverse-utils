import { series } from 'gulp';
import { clear, compileUtils, compileVtex } from './gulp/tasks';

export const build = series(clear, compileUtils, compileVtex);

export default build;
