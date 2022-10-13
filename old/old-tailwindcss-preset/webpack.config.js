const { merge } = require('webpack-merge');
const path = require('path');
const common = require('../../webpack.common');

module.exports = merge(common, {
  entry: './src/index.ts',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
    library: 'tailwindcssPreset',
  },
});
