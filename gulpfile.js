var gulp = require('gulp'),
    sass = require('gulp-sass'),
    concat = require('gulp-concat'),
    autoprefixer = require('gulp-autoprefixer');

var pathStylesFiles = ['components/app.scss', 'components/**/*.scss'],
    jsFiles = ['components/App.js', 'components/**/*.js'];

gulp.task('sass', function() {
    return gulp.src(pathStylesFiles)
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({browsers: ['last 3 versions']}))
        .pipe(concat('styles.css'))
        .pipe(gulp.dest('./'));
});

gulp.task('watcher', function() {
    gulp.watch(pathStylesFiles, ['sass']);
});

// Default Task
gulp.task('default', ['watcher', 'sass']);