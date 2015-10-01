var gulp = require('gulp');

gulp.task('browserify', require('./gulp/browserify'));

gulp.task('default', ['browserify'])