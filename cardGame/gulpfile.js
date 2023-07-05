const rollup = require('rollup');
const gulp = require('gulp');
const clean = require('gulp-clean');
const browsersynch = require('browser-sync');
const server = browsersynch.create();

exports.bundle = () => {
    console.log('GULP - Running bundle function');
}

exports.play = () => {
    console.log('GULP - Running game....');
    server.init({
        server: {
            baseDir: "."
        }
    })
}

gulp.task('clean', () => {
    return gulp.src('node_modules').pipe(clean());
})