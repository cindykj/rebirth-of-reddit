const gulp = require('gulp');
const sass = require('gulp-sass');

// SASS Compilation task
gulp.task('styles', function() {
  gulp.src('sass/**/*.scss')
      .pipe(sass().on('error', sass.logError))
      .pipe(gulp.dest('public/css/'));
});

gulp.task('watch', function() {
  gulp.watch('sass/**/*.scss', ['styles']);
});

// SASS Watcher
gulp.task('default', ['watch']);




// const gulp = require('gulp');
// const sass = require('gulp-sass');

// // SASS Compilation task
// gulp.task('styles', function() {
//   gulp.src('sass/**/*.scss') // read all dirs and files in /sass that is .scss
//     .pipe(sass().on('error', sass.logError)) // pass errors
//     .pipe(gulp.dest('./public/css')); // console to public dir
// });

// // SASS Watcher
// gulp.task('default', ['watch']);
//   // gulp.watch('sass/**/*.scss', ['styles']); // watch this directory for any changes; will fire all tasks in second argument 'styles' task
