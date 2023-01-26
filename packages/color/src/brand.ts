"use strict";
/**
 * Relucent Colors.
 *
 * @since     1.0.0
 * @module    Relucent\Colors
 * @copyright 2023 Relucent Ltd
 * @author    Relucent Ltd <hello@relucent.dev>
 * @author    Dom Webber <dom.webber@hotmail.com>
 * @see       https://relucent.dev
 */

import global from "./global";

const primary = {
  blue: "#1d4f94",
  dark: "#10132a",
  light: "#ffffff",
};

const brand = {
  primary: {
    lighter: global["royal-blue"][100],
    light: global["royal-blue"][300],
    DEFAULT: global["royal-blue"][500],
    dark: global["royal-blue"][700],
    darker: global["royal-blue"][900],
  },

  secondary: {
    lighter: global["anzac"][100],
    light: global["anzac"][300],
    DEFAULT: global["anzac"][500],
    dark: global["anzac"][700],
    darker: global["anzac"][900],
  },
};

export default brand;
