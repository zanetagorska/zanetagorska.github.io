var gulp = require('gulp');

gulp.task('fonts', function(){
  return gulp.src('./app/assets/fonts/**')
    .on('error', function(errorInfo) {
      console.log(errorInfo.toString());
      this.emit('end');
    })
    .pipe(gulp.dest('./app/temp/fonts'));
});