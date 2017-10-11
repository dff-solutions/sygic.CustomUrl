const gulp = require('gulp');
const exec = require('child_process').exec;
const compodoc = require('@compodoc/gulp-compodoc');

/**
 * Generate angular docs with compodoc
 */
gulp.task('compodoc', () => {
    return gulp
        .src([
            'src/**/*.ts'
        ])
        .pipe(compodoc({
            output: 'docs',
            tsconfig: 'tsconfig.json',
            serve: false,
            disableCoverage: true
        }));
});
