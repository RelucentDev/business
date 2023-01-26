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
import brand from "./brand";
import semantic from "./semantic";
import * as chart from "./chart";

/**
 * Primary Colour Palette.
 * These are the main brand colours for Relucent. These colours should be
 * extracted from the base/descriptive colour palette.
 *
 * @since 2.0.0
 * @author Dom Webber <dom.webber@hotmail.com>
 */
const primary = {
  blue: "#1d4f94",
  dark: "#10132a",
  light: "#ffffff",
};

/**
 * Secondary Colour Palette.
 * These are the secondary brand colours for Relucent. These colours should be
 * harmonious with the primary palette.
 *
 * @since 2.0.0
 * @author Dom Webber <dom.webber@hotmail.com>
 */
const secondary = {
  red: "#fc440f",
  yellow: "#ffbf00",
  green: "#40c9a2",
  neutral: "",
  teal: "#00b8d9",
  purple: "#8c63af",
};

export default global;
export { chart, brand, semantic };
