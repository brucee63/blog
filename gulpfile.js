// We're only using gulp to template replace or include HTML as a build/dist
// step. The index.html and layout.html files have gulp references, the output
// files are in the dist folder.
const gulp        = require('gulp');
const fileinclude = require('gulp-file-include');

const paths = {
  scripts: {
    src: './app/',
    dest: './app/dist/'
  }
};

async function includeHTML(){
    return gulp.src([
      '*.html'
      ])
      .pipe(fileinclude({
        prefix: '@@',
        basepath: '@file'
      }))
      .pipe(gulp.dest(paths.scripts.dest));
  }

  exports.default = includeHTML;