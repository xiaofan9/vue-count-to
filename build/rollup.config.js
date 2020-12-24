import { nodeResolve } from '@rollup/plugin-node-resolve'
import { terser } from 'rollup-plugin-terser'
import pkg from '../package.json'
import json from '@rollup/plugin-json'
import babel from '@rollup/plugin-babel'

const deps = Object.keys(pkg.dependencies)
const config = require('./config');

export default [
  {
    input: config.input,
    output: {
      format: 'es',
      file: `dist/${pkg.name}.esm.js`,
    },
    plugins: [
      nodeResolve(),
      babel({
        babelHelpers: 'runtime',
      }),
      json(),
      terser()
    ],
    external(id) {
      return /^vue/.test(id)
        || deps.some(k => new RegExp('^' + k).test(id))
    },
  },
]
