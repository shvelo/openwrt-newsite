var gulp = require('gulp');
var sass = require('gulp-sass');
var clean = require('gulp-clean');

gulp.task('clean', function() {
  return gulp.src(['css/*'], {read: false})
    .pipe(clean());
});

gulp.task('sass', function () {
    gulp.src('./sass/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./css'));
});

gulp.task('default', ['clean'], function(){
	gulp.start('sass');
});