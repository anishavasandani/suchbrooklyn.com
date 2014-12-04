'use strict';
 
var gulp = require('gulp');
var browserSync = require('browser-sync');
var reload = browserSync.reload;
var exec = require('child_process').exec;
 var uncss = require('gulp-uncss');
 var clean = require('gulp-clean');

var run = function(command, done) {
  exec(command, function(error) {
    if (error) {
      return done(error);
    };
    done();
  });
};
 
gulp.task('compass', function(done) {
  // A `config.rb` file must be present in the same directory of this file.
  run('compass compile .', done);
});

gulp.task('clean-css', function () {
  return gulp.src('_site/css/*.css', {read: false})
    .pipe(clean());
});

gulp.task('uncss', ['clean-css'], function() {
    gulp.src('_site/css/*.css')
        .pipe(uncss({
            html: ['index.html', 'contact.html', 'thanks.html']
        }))
        .pipe(gulp.dest('./_site/css/site.css'));
});

gulp.task('jekyll', function(done) {
  // Compile Jekyll into `dist`. This task executes the `compass` task each time,
  // it could be optimized to only execute it if SASS files are changed.
  run('jekyll build', done);
});

gulp.task('jekyll-local',function(done) {
  // Compile Jekyll into `dist`. This task executes the `compass` task each time,
  // it could be optimized to only execute it if SASS files are changed.
  run('jekyll build --config _config.yml,_development.yml', done);
});
 
gulp.task('serve', function() {
  browserSync({
    notify: false,
    server: {
      baseDir: ['_site']
    }
  });
 
  gulp.watch(['src/**/*','*.js','*.yml','*.scss','*.css'], ['jekyll-local', reload]);
});
 
gulp.task('default', ['jekyll-local','uncss','serve']);
gulp.task('deploy', ['jekyll']);