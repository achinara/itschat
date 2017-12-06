const gulp = require('gulp'),
    sass = require('gulp-sass'),
    concat = require('gulp-concat'),
    autoprefixer = require('gulp-autoprefixer');

const pathStylesFiles = ['components/app.scss', 'components/**/*.scss'];

gulp.task('sass', function() {
    return gulp.src(pathStylesFiles)
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({browsers: ['last 3 versions']}))
        .pipe(concat('styles.css'))
        .pipe(gulp.dest('./'));
});

gulp.task('watch', function() {
    gulp.watch(pathStylesFiles, ['sass']);
});

// Default Task
gulp.task('default', ['sass', 'watch']);