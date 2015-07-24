var gulp = require('gulp');
var ts = require('gulp-typescript');
var watch = require('gulp-watch');
var less = require('gulp-less');
var bower = require('gulp-bower');
var mainBowerFiles = require('main-bower-files');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var concatCss = require('gulp-concat-css');
var fs = require('fs');
var livereload = require('gulp-livereload');

// define tasks here
gulp.task('inject', ['typescript', 'bower', 'less', 'views', 'images']);

gulp.task('develop', ['inject', 'watch']);

gulp.task('build', ['inject']);

gulp.task('bower', ['bowerJs', 'bowerLess']);
 
gulp.task('typescript', function () {
  var tsResult = gulp.src('app/components/**/*.ts')
    .pipe(ts({
        noImplicitAny: true,
        out: 'content.js'
      }));

  return tsResult.js.pipe(gulp.dest('public/scripts/'))
  .pipe(livereload());
});

gulp.task('less', function() {
  return gulp.src('app/main.less')
  .pipe(less())
  .pipe(gulp.dest('public/styles/'))
  .pipe(livereload());
});

gulp.task('bowerJs', function() {
  return gulp.src(mainBowerFiles('**/*.js'))
  .pipe(uglify())
  .pipe(concat('vendor.js'))
  .pipe(gulp.dest('public/scripts/'))
  .pipe(livereload());
});

gulp.task('bowerLess', function() {
  return gulp.src(mainBowerFiles('**/*.less'))
  .pipe(less())
  .pipe(concat('vendor.css'))
  .pipe(gulp.dest('public/styles/'))
  .pipe(livereload());
});

gulp.task('views', function() {
  var paths = ['app/*.jade'];

  var components = fs.readdirSync('app/components/');
  for(var i = 0; i < components.length; i++) {
    paths.push('app/components/' + components[i] + '/templates/*.jade');
    paths.push('app/components/' + components[i] + '/partials/*.jade');
  }

  return gulp.src(paths)
  .pipe(gulp.dest('public/views'))
  .pipe(livereload());
});

gulp.task('images', function() {
  var paths = [];
  var components = fs.readdirSync('app/components/');
  for(var i = 0; i < components.length; i++) {
    paths.push('app/components/' + components[i] + '/images/*');
  }

  return gulp.src(paths)
  .pipe(gulp.dest('public/images'))
  .pipe(livereload());
});

gulp.task('watch', ['livereload', 'watchTs', 'watchLess', 'watchImages', 'watchViews']);

gulp.task('livereload', function() {
  livereload.listen();
});

gulp.task('watchTs', function() {
  return gulp.watch('app/components/**/*.ts', [
    'typescript'
  ]);
});

gulp.task('watchLess', function() {
  return gulp.watch(['app/main.less', 'app/components/**/*.less'], [
    'less'
  ]);
});

gulp.task('watchImages', function() {
  return gulp.watch('app/components/**/images/*', [
    'images'
  ]);
});

gulp.task('watchViews', function() {
  return gulp.watch(['app/*.jade', 'app/components/**/*.jade'], [
    'views'
  ]);
});