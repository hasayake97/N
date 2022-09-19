// rollup.config.js

import babel from 'rollup-plugin-babel'
import { terser } from 'rollup-plugin-terser'
import { nodeResolve } from '@rollup/plugin-node-resolve'


export default {
  input: 'main.js',

  output: [
    {
      name: 'precisioner',
      format: 'umd',
      file: 'lib/index.js'
    },
    {
      file: 'lib/index.cjs',
      format: 'cjs'
    },
    {
      file: 'lib/index.mjs',
      format: 'esm'
    }
  ],

  plugins: [
    nodeResolve({
      extensions: ['.js'],
      browser: true,
    }),

    babel({
      exclude: 'node_modules/**'
    }),

    terser()
  ]
}
