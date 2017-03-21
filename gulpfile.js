'use strict';

const gulp = require('gulp');
const server = require('gulp-server-livereload');
const sass = require('gulp-sass');

/**
 * sass tasks
 */

// dev sass building task
gulp.task('sass:dev', _ => {
    return gulp.src('app/styles/scss/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('app/styles/css'));
});

// prd sass building task
gulp.task('sass:prod', _ => {
    return gulp.src('app/styles/scss/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('dist/styles/css'));
});

// sass watch task
gulp.task('sass:watch', _ => {
    return gulp.watch('app/styles/scss/**/*.scss', ['sass:dev']);
});


/**
 * web server task
 */
gulp.task('webserver', _ => {
  return gulp.src('app')
        .pipe(server({
            fallback: 'index.html',
            livereload: true,
            open: true,
            port: '9000'
        })
    );
});

gulp.task('serve', ['sass:watch', 'webserver']);

gulp.task('build', ['sass:prod']);