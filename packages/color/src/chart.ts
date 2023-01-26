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

/**
 * Categorical Chart Colours.
 * Contains multiple colours which contrast to each other and arrange as a
 * specific order. This set presents **different types of data**, such as data
 * in a bar graph.
 *
 * {@link https://blog.prototypr.io/7612075cc71a#3ad0}
 *
 * @since 2.0.0
 * @author Dom Webber <dom.webber@hotmail.com>
 */
const categorical = [
  global["royal-blue"][500],
  global["pastel-green"][500],
  global["mandy"][500],
  global["anzac"][500],
  global["red-damask"][500],
  global["purple-heart"][500],
  global["royal-blue"][700],
  global["pastel-green"][700],
  global["mandy"][700],
  global["anzac"][700],
  global["red-damask"][700],
  global["purple-heart"][700],
];

/**
 * Sequential Chart Colours.
 * Contains a gradient of colours which follow one colour and arrange as shades
 * from light to dark. This set presents **fixed, incremental data**, such as
 * data in a heat map or tree map.
 *
 * **Note: You should not stop in the middle of the gradient**.
 *
 * {@link https://blog.prototypr.io/7612075cc71a#3ad0}
 *
 * @since 2.0.0
 * @author Dom Webber <dom.webber@hotmail.com>
 */
const sequential = Object.keys(global["royal-blue"])
  .filter((key) => key !== "DEFAULT")
  .map((key) => global["royal-blue"][key]);

/**
 * Polarised Chart Colours.
 * Contains a series gradient of two extremes with (one or multiple) via steps.
 * This set presents **heat maps** well.
 *
 * {@link https://blog.prototypr.io/7612075cc71a#3ad0}
 *
 * @since 2.0.0
 * @author Dom Webber <dom.webber@hotmail.com>
 */
const polarised = [
  global["royal-blue"][500],
  global["royal-blue"][400],
  global["royal-blue"][300],
  global["royal-blue"][200],
  global["royal-blue"][100],
  global["mandy"][100],
  global["mandy"][200],
  global["mandy"][300],
  global["mandy"][400],
  global["mandy"][500],
];

export { categorical, sequential, polarised };
