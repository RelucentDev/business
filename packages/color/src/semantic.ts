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

const semantic = {
  accent: {
    lighter: global["royal-blue"][100],
    light: global["royal-blue"][300],
    DEFAULT: global["royal-blue"][500],
    dark: global["royal-blue"][700],
    darker: global["royal-blue"][900],
  },
  positive: {
    lighter: global["pastel-green"][100],
    light: global["pastel-green"][300],
    DEFAULT: global["pastel-green"][500],
    dark: global["pastel-green"][700],
    darker: global["pastel-green"][900],
  },
  attention: {
    lighter: global["anzac"][100],
    light: global["anzac"][300],
    DEFAULT: global["anzac"][500],
    dark: global["anzac"][700],
    darker: global["anzac"][900],
  },
  negative: {
    lighter: global["mandy"][100],
    light: global["mandy"][300],
    DEFAULT: global["mandy"][500],
    dark: global["mandy"][700],
    darker: global["mandy"][900],
  },
  severe: {
    lighter: global["red-damask"][100],
    light: global["red-damask"][300],
    DEFAULT: global["red-damask"][500],
    dark: global["red-damask"][700],
    darker: global["red-damask"][900],
  },
  pending: {
    lighter: global["purple-heart"][100],
    light: global["purple-heart"][300],
    DEFAULT: global["purple-heart"][500],
    dark: global["purple-heart"][700],
    darker: global["purple-heart"][900],
  },
};

export default semantic;
