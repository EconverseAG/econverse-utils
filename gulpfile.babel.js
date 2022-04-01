import { series } from 'gulp';
import { clear, scripts } from './gulp/tasks';

export const build = series(clear, scripts);

export default build;
