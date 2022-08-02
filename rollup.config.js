// rollup.config.js

import { terser } from 'rollup-plugin-terser'
import { nodeResolve } from '@rollup/plugin-node-resolve'


export default {
  input: 'main.js',

  output: {
    name: 'NP',
    format: 'umd',
    file: 'lib/index.umd.js'
  },

  plugins: [
    nodeResolve({
      extensions: ['.js']
    }),

    // terser()
  ]
}
