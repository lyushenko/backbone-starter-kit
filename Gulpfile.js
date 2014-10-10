var  gulp = require('gulp'),
     less = require('gulp-less'),
    gutil = require('gulp-util'),
   cssmin = require('gulp-cssmin'),
   rename = require('gulp-rename'),
   uglify = require('gulp-uglify'),
   coffee = require('gulp-coffee'),
  connect = require('gulp-connect'),
   concat = require('gulp-concat');

gulp.task('server', function() {
  connect.server({
    root: './',
    port: 8080,
    livereload: true
  });
});

gulp.task('coffee', function() {
  gulp.src('./app/coffee/**/*.coffee')
    .pipe(coffee({bare: true}).on('error', gutil.log))
    .pipe(rename({extname: '.js'}))
    .pipe(gulp.dest('./app/scripts'))
    .pipe(connect.reload());
});

gulp.task('less', function () {
  gulp.src('./app/styles/application.less')
    .pipe(less().on('error', gutil.log))
    .pipe(rename({basename: 'styles'}))
    .pipe(gulp.dest('./app/styles'))
    .pipe(connect.reload());
});

gulp.task('dist', function() {
  gulp.start('coffee', 'less');

  gulp.src('./app/scripts/**/*.js')
    .pipe(concat('scripts.js'))
    .pipe(rename({suffix: '.min'}))
    .pipe(uglify())
    .pipe(gulp.dest('./dist'));

  gulp.src('./app/styles/styles.css')
    .pipe(cssmin().on('error', gutil.log))
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('./dist'));
});

gulp.task('default', function() {
  gulp.start('server', 'coffee', 'less');
  gulp.watch('app/coffee/**/*.coffee', ['coffee']);
  gulp.watch('app/styles/*.less', ['less']);
});