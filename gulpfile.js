var gulp = require("gulp");
var del = require("del");
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var babel = require('gulp-babel');
var htmlreplace = require('gulp-html-replace');

gulp.task("build",function(cb){
    del(["dist"]).then(()=>{
        gulp.src(['lib/**'])
        .pipe(gulp.dest('dist/lib'));

        gulp.src(['images/**'])
        .pipe(gulp.dest('dist/images'));

        gulp.src(['css/**'])
        .pipe(gulp.dest('dist/css'));

        gulp.src(['js/*.js'])
        .pipe(babel())
        .pipe(concat('main.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'))

        gulp.src('kedou.html')
        .pipe(htmlreplace({
            'js': 'js/main.min.js'
        }))
        .pipe(gulp.dest('dist/'));

        cb();
    });
});