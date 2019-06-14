const gulp = require('gulp'); 
const autoprefixer = require('gulp-autoprefixer');
const rename = require('gulp-rename');
const less = require('gulp-less');
const pump = require('pump') 

gulp.task('basis',async function() {
  await pump([
    gulp.src('./package/basis/index.less'),
    less(),
    autoprefixer({
      browsers: ['last 2 versions', 'ie > 8']
    }),
    rename('basis.css'),//{'suffix':'.min'}
    gulp.dest('./dist')
  ])
})
gulp.task('main',async function() {
  await pump([
    gulp.src('./package/main/index.less'),
    less(),
    autoprefixer({
      browsers: ['last 2 versions', 'ie > 8']
    }),
    rename('main.css'),//{'suffix':'.min'}
    gulp.dest('./dist')
  ])
})
gulp.task('secondary',async function() {
  await pump([
    gulp.src('./package/secondary/index.less'),
    less(),
    autoprefixer({
      browsers: ['last 2 versions', 'ie > 8']
    }),
    rename('secondary.css'),//{'suffix':'.min'}
    gulp.dest('./dist')
  ])
})
 
gulp.task('watch-css',async function(){
  await gulp.watch(['package/main/*.less'],gulp.series('main'))
})
 

gulp.task('default',gulp.series('watch-css')) 
