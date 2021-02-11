const path = require('path');
const { genTranspileDepRegex } = require("./utils");
const nodeExternals = require('webpack-node-externals');

exports.alias = {
  packages: path.resolve(__dirname, '../packages'),
};

exports.vue = {
  root: 'Vue',
  commonjs: 'vue',
  commonjs2: 'vue',
  amd: 'vue'
};

exports.externals = [{ vue: 'vue' },/* nodeExternals() */];

exports.jsexclude = function (filepath){
  const transpileDependencies = ['element-ui/src', 'element-ui/packages'];
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

exports.output = {
  path: path.resolve(process.cwd(), './dist')
}

exports.input = path.resolve(__dirname, '../src/index.js');