const { merge } = require('webpack-merge');
const path = require('path');
const common = require('../../webpack.common');

module.exports = (env) => merge(
  common(env),
  {
    entry: './src/index.ts',
    output: {
      filename: 'index.js',
      path: path.resolve(__dirname, 'dist'),
      clean: true,
      library: 'colors',
      umdNamedDefine: true,
      libraryTarget: 'umd',
    },
  }
);
