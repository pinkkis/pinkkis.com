const gulp = require('gulp');
const less = require('gulp-less');
const path = require('path');

gulp.task('default', ['less'], function () {
	// content
});

gulp.task('less', function () {
	return gulp.src('./less/styles.less')
		.pipe(less({
			paths: [path.join(__dirname, 'less')]
		}))
		.pipe(gulp.dest('./css'));
});

gulp.task('watch', function() {
	gulp.watch('./less/**/*.less', ['less']);
});