/**
 * Relucent TailwindCSS Preset.
 *
 * @package   Relucent\TailwindCSSPreset
 * @license   Proprietary
 * @copyright 2022 Relucent Ltd
 * @link      https://relucent.dev
 * @since     1.0.0
 */

const { merge } = require("webpack-merge");
const path = require("path");
const common = require("../../webpack.common");

module.exports = (env) =>
  merge(common(env), {
    target: "node",
    entry: "./src/index.ts",
    output: {
      filename: "index.js",
      path: path.resolve(__dirname, "dist"),
      clean: true,
      library: "tailwindcssPreset",
      umdNamedDefine: true,
      libraryTarget: "umd",
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: "ts-loader",
          exclude: /node_modules/,
        },
      ],
    },
  });
