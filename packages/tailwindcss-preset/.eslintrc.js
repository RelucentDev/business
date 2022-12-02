/**
 * Relucent Website.
 *
 * @package   Relucent\Website
 * @copyright 2022 Relucent Ltd
 * @link      https://relucent.dev
 * @since     1.0.0
 */

module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  plugins: [
    "prettier",
    "@typescript-eslint",
  ],
  extends: [
    "plugin:prettier/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "./tsconfig.json",
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  ignorePatterns: [
    "*.css",
    "*.json",
    "**/*.test.*",
    "**/__snapshots__/*"
  ],
  rules: {
    "prettier/prettier": [
      "error",
    ],
  },
};
