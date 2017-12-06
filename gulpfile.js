var gulp = require('gulp'),
    sass = require('gulp-sass'),
    concat = require('gulp-concat'),
    autoprefixer = require('gulp-autoprefixer'),
    babel = require("gulp-babel");

var pathStylesFiles = ['components/app.scss', 'components/**/*.scss'],
    jsFiles = ['components/App.js', 'components/**/*.js'];

gulp.task('sass', function() {
    return gulp.src(pathStylesFiles)
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({browsers: ['last 3 versions']}))
        .pipe(concat('styles.css'))
        .pipe(gulp.dest('./'));
});

gulp.task("babel", function () {
    return gulp.src(jsFiles)
        .pipe(babel())
        .pipe(gulp.dest("compiled"));
});

gulp.task('watcher', function() {
    gulp.watch(pathStylesFiles, ['sass']);
    gulp.watch(jsFiles, ['babel']);
});

// Default Task
gulp.task('default', ['watcher', 'sass', 'babel']);