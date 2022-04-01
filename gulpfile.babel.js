var { series } = require('gulp');
var Tasks = require('./gulp/tasks');

exports.build = series(Tasks.clear, Tasks.scripts);
