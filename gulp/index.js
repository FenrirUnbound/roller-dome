var gulp = require('gulp');
var browserify = require('./browserify');

module.exports = function main() {
  gulp.task('browserify', browserify);

  return gulp;
};