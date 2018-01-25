const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const browserSync = require('browser-sync').create();


gulp.task('styles', function() {
   gulp.src('sass/**/*.sass')
       .pipe(sass())
       .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
            }))
       .pipe(gulp.dest('css/'))
       .pipe(browserSync.stream());
});

gulp.task('browser-sync', ['styles'], function() {
    browserSync.init({
        server: {
            baseDir: "."
        },
        open: false
    });
});

gulp.task('default', ['browser-sync'], function() {
   gulp.watch('sass/**/*.sass', ['styles']);
});
