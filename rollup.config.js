import babel from 'rollup-plugin-babel'
import { uglify } from 'rollup-plugin-uglify'
import pkg from './package.json'

const input = './index.js'
const babelPlugin = babel({
  babelrc: false,
  exclude: 'node_modules/**',
  presets: [['@babel/env', { modules: false }]]
})

export default [
  {
    input,
    output: [
      {
        file: pkg.main,
        format: 'cjs',
        interop: false
      },
      {
        file: pkg.module,
        format: 'esm'
      }
    ],
    plugins: [babelPlugin]
  },
  {
    input,
    output: {
      file: pkg.browser,
      format: 'iife',
      name: 'loadScript'
    },
    plugins: [babelPlugin, uglify()]
  }
]
