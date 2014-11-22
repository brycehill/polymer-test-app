var gulp = require('gulp')
var concat = require('gulp-concat')

var src = {
    vendor: ['bower_components/polymer/polymer.js'],
    js: []
}


gulp.task('concat', function() {
    gulp.src(src.vendor)
        .pipe(concat('vendor.js'))
        .pipe(gulp.dest('js/vendor/'))

    //gulp.src(src.js)
    //    .pipe(concat('account_change.js', { newLine: ';' }))
    //    .pipe(gulp.dest('js/'))
});


gulp.task('watch', function() {
    gulp.watch(src.js, ['concat'])
})

gulp.task('dev', function() {

})
