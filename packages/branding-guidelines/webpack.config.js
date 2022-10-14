const { merge } = require('webpack-merge');
const path = require('path');
const common = require('../../webpack.common');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env) => merge(
  common(env),
  {
    target: 'web',
    entry: './src/index.ts',
    output: {
      filename: 'index.js',
      path: path.resolve(__dirname, 'dist'),
    },
    module: {
      rules: [
        {
          test: /\.css$/i,
          use: ['style-loader', 'css-loader'],
        }
      ],
    },
    plugins: [new HtmlWebpackPlugin()],
    devServer: {
      static: path.join(__dirname, 'dist'),
      compress: true,
      port: 4000,
    },
  },
);
