module.exports = function (gulp, $) {
  gulp.task('test')
  gulp.passedArgs = {}
  gulp.passedArgs.test = [].slice.call(arguments, 1)
}

