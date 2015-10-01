var browserify = require('browserify');
var fs = require('fs');
var gulp = require('gulp');
var path = require('path');
var source = require('vinyl-source-stream');
var SOURCE_PATH = path.resolve(__dirname, '../views/js');
var DEST_PATH = path.resolve(__dirname, '../views/scripts/');

function gatherSources() {
  var targetFolder = path.resolve(__dirname, SOURCE_PATH);
  var files = fs.readdirSync(targetFolder);
  var result = [];

  files.forEach(function createAbsolutePath(file) {
    if (path.extname(file) === '.js') {
      result.push(path.join(targetFolder, file));
    }
  });
  return result;
}


module.exports = function main() {
  var sourceFiles = gatherSources();
  var destinationFiles = path.resolve(__dirname, DEST_PATH);
  sourceFiles.forEach(function compile(sourceFile) {
    return browserify({
      debug: true,
      entries: [sourceFile]
    })
    .bundle()
    .pipe(source(path.basename(sourceFile)))
    .pipe(gulp.dest(destinationFiles))
  });
};
