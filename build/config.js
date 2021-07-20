const path = require('path');
const { genTranspileDepRegex } = require("./util");

exports.foldPath = path.resolve(__dirname, `..`);
exports.input = path.resolve(exports.foldPath, "src/index.js");

exports.output = {
  path: path.resolve(exports.foldPath, './dist')
}

// 别名
exports.alias = {};

exports.vue = {
  root: 'Vue',
  commonjs: 'vue',
  commonjs2: 'vue',
  amd: 'vue'
};

exports.jsexclude = function (filepath){
  const transpileDependencies = [];
  const transpileDepRegex = genTranspileDepRegex(transpileDependencies);

  // always transpile js in vue files
  if (/\.vue\.jsx?$/.test(filepath)) {
    return false
  }

  // only include @babel/runtime when the @vue/babel-preset-app preset is used
  if (
    process.env.VUE_CLI_TRANSPILE_BABEL_RUNTIME &&
    filepath.includes(path.join('@babel', 'runtime'))
  ) {
    return false
  }

  // check if this is something the user explicitly wants to transpile
  if (transpileDepRegex && transpileDepRegex.test(filepath)) {
    return false
  }
  // Don't transpile node_modules
  return /node_modules/.test(filepath)
}
