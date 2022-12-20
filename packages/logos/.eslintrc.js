/**
 * Relucent Logos Package.
 *
 * @package   Relucent\Logos
 * @license   Proprietary
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
  plugins: ["prettier"],
  extends: ["plugin:prettier/recommended"],
  ignorePatterns: ["*.css", "*.json", "**/*.test.*", "**/__snapshots__/*"],
  rules: {
    "prettier/prettier": ["error"],
  },
};
