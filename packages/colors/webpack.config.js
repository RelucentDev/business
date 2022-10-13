const path = require('path');

module.exports = (env) => ({
  mode: env.production ? 'production' : 'development',
  target: 'node',
  entry: './src/index.ts',
  devtool: env.production ? 'inline-source-map' : 'eval',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
    library: 'colors',
  },
  optimization: {
    usedExports: true,
  },
});
