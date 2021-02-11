/* eslint-disable @typescript-eslint/no-var-requires */
const { src, dest, series } = require('gulp');
const jsonEditor = require("gulp-json-editor");
const { Reflect } = require('core-js');
const { merge } = require('merge');

const foldPath = './';

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
      tmpJson.dependencies = {
        vue: tmpJson.dependencies.vue
      };

      return tmpJson;
    })).pipe(dest(foldPath));
}

exports.default = series(package)