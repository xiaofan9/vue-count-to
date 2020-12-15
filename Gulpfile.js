

const { src, dest, series } = require('gulp');
const clean = require('gulp-clean');
const path = require('path');
const foldPath = 'packages/date-week-range';
const jsonEditor = require("gulp-json-editor");
const { Reflect } = require('core-js');
const merge = require('merge')

function copy (name) {
  return function copy() {
    clear(name);

    return src(name)
      .pipe(dest(foldPath));
  }
}

function clear(name) {
  return src(path.resolve(foldPath, name), {
    allowEmpty: true
  }).pipe(clean({
    force: true
  }));
}

function package() {
  return src("package.json")
    .pipe(jsonEditor(function(json) {
      const existJson = {
        scripts: {
          test: 'echo "Error: no test specified" && exit 1'
        }
      };
      const tmpJson = merge(json, existJson);

      Reflect.deleteProperty(tmpJson, 'devDependencies');
      Reflect.deleteProperty(tmpJson, 'dependencies');

      return tmpJson;
    })).pipe(dest(foldPath));
}

exports.default = series(copy('LICENSE'), copy('README.md'), package)