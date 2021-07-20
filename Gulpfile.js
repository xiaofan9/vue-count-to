/* eslint-disable @typescript-eslint/no-var-requires */
const { src, dest, series } = require('gulp');
const jsonEditor = require("gulp-json-editor");
const { Reflect } = require('core-js');
const { cloneDeep } = require('lodash');

const foldPath = './';

function package() {
  return src("package.json")
    .pipe(jsonEditor(function(json) {
      const tmpJson = cloneDeep(json);
      Reflect.deleteProperty(tmpJson, 'devDependencies');

      tmpJson.scripts = {
        test: 'echo "Error: no test specified" && exit 1'
      }

      return tmpJson;
    })).pipe(dest(foldPath));
}

exports.default = series(package)