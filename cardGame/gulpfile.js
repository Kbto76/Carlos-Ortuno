const rollup = require('rollup');
const gulp = require('gulp');
const clean = require('gulp-clean');

exports.bundle = () => {
    console.log('GULP - Running bundle function');
}

exports.play = () => {
    console.log('GULP - Running play function')
}

gulp.task('clean', () => {
    return gulp.src('node_modules').pipe(clean());
})