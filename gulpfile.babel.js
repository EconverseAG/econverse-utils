import { series } from 'gulp';
import { clear, scripts, vtexUtils } from './gulp/tasks';

export const build = series(clear, scripts, vtexUtils);

export default build;
