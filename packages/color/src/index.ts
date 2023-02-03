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

/**
 * The Core Colour Palette.
 *
 * First Tier Tokens (Source: {@link https://uxdesign.cc/9454818ed7cb}).
 *
 * These are the global/presentational colours for the colour system. This
 * represents all colours and shades of colours available within the colour
 * system.
 *
 * **Global colour tokens.**
 * These colours are named according to their appearance and colour value, such
 * as ```blue-50```, ```green-70```, wherein ```blue-0``` would have been
 * ```#000000``` and ```blue-100``` would have been ```#ffffff```.
 *
 * **Avoid direct use.**
 * Global tokens should be used sparingly. *Use aliases wherever possible.*
 *
 * This palette stands as the "Extended Palette". All usable tints and shades
 * of each colour in the palette. They are numbered for easy reference.
 *
 * **Also Known As**
 *
 * Source: {@link https://uxdesign.cc/9454818ed7cb}
 *
 * - **Core Tokens**
 * - Base Tokens
 * - Basic Tokens
 * - Foundation Tokens
 * - Meta Tokens
 * - Global Tokens
 * - Brand Tokens
 * - Palette Tokens
 * - Option Tokens
 * - Choice Tokens
 * - Private Tokens
 * - Internal Tokens
 *
 * {@link https://uxdesign.cc/9454818ed7cb}.
 * {@link https://atlassian.design/foundations/color#extended-palette}.
 * {@link https://spectrum.adobe.com/page/design-tokens/#Global-tokens}.
 * {@link https://dev.to/ynab/a-semantic-color-system-the-theory-hk7}.
 * {@link https://frontside.com/blog/2021-01-15-design-tokens-and-components/}
 *
 * **Adding additional colours/scales**
 * {@link https://color.adobe.com/create/color-wheel}.
 * {@link https://htmlcolors.com/hsl-to-hex}.
 * {@link https://htmlcolorcodes.com/color-picker/}.
 * {@link https://www.tailwindshades.com/}.
 * {@link https://uicolors.app/create}.
 *
 * @since 2.0.0
 * @author Dom Webber <dom.webber@hotmail.com>
 */
const core = {
  /**
   * White.
   * Based on #ffffff.
   *
   * Use Cases:
   *
   * - Primary White #ffffff (white).
   * - Neutral Light #ffffff (white).
   *
   */
  white: "hsl(0deg 0% 0% / <alpha-value>)",

  /**
   * *"Black".*
   * Equivalent to #020B17 (blue-10).
   *
   * @see core.blue[10];
   */
  black: "hsl(214deg 84 5 / <alpha-value>)",

  /**
   * Red.
   * Based on #D84231.
   */
  red: {
    10: "hsl(6deg 68% 12% / <alpha-value>)",
    20: "hsl(6deg 68% 22% / <alpha-value>)",
    30: "hsl(6deg 68% 32% / <alpha-value>)",

    /**
     * Negative Red.
     */
    40: "hsl(6deg 68% 42% / <alpha-value>)",
    50: "hsl(6deg 68% 52% / <alpha-value>)",
    60: "hsl(6deg 68% 62% / <alpha-value>)",
    70: "hsl(6deg 68% 72% / <alpha-value>)",
    80: "hsl(6deg 68% 82% / <alpha-value>)",
    90: "hsl(6deg 68% 92% / <alpha-value>)",
  },

  /**
   * Orange.
   * Based on #FF7214.
   */
  orange: {
    10: "hsl(24deg 100% 14% / <alpha-value>)",
    20: "hsl(24deg 100% 24% / <alpha-value>)",
    30: "hsl(24deg 100% 34% / <alpha-value>)",

    /**
     * Severe Orange.
     */
    40: "hsl(24deg 100% 44% / <alpha-value>)",
    50: "hsl(24deg 100% 54% / <alpha-value>)",
    60: "hsl(24deg 100% 64% / <alpha-value>)",
    70: "hsl(24deg 100% 74% / <alpha-value>)",
    80: "hsl(24deg 100% 84% / <alpha-value>)",
    90: "hsl(24deg 100% 94% / <alpha-value>)",
  },

  /**
   * Yellow.
   * Based on #DFC416.
   */
  yellow: {
    10: "hsl(52deg 82% 8% / <alpha-value>)",
    20: "hsl(52deg 82% 18% / <alpha-value>)",
    30: "hsl(52deg 82% 28% / <alpha-value>)",

    /**
     * Warning Yellow.
     */
    40: "hsl(52deg 82% 38% / <alpha-value>)",
    50: "hsl(52deg 82% 48% / <alpha-value>)",
    60: "hsl(52deg 82% 58% / <alpha-value>)",
    70: "hsl(52deg 82% 68% / <alpha-value>)",
    80: "hsl(52deg 82% 78% / <alpha-value>)",
    90: "hsl(52deg 82% 88% / <alpha-value>)",
  },

  /**
   * Green.
   * Based on #51B358.
   */
  green: {
    10: "hsl(124deg 39% 11% / <alpha-value>)",
    20: "hsl(124deg 39% 21% / <alpha-value>)",
    30: "hsl(124deg 39% 31% / <alpha-value>)",

    /**
     * Positive Green.
     */
    40: "hsl(124deg 39% 41% / <alpha-value>)",
    50: "hsl(124deg 39% 51% / <alpha-value>)",
    60: "hsl(124deg 39% 61% / <alpha-value>)",
    70: "hsl(124deg 39% 71% / <alpha-value>)",
    80: "hsl(124deg 39% 81% / <alpha-value>)",
    90: "hsl(124deg 39% 91% / <alpha-value>)",
  },

  /**
   * Blue.
   * Based on #2E7DEA.
   */
  blue: {
    /**
     * Black, Neutral Dark, Neutral Dark Muted (with opacity), Neutral Dark Subtle (with opacity).
     */
    10: "hsl(214deg 82% 5% / <alpha-value>)",

    /**
     * Primary Blue.
     */
    20: "hsl(214deg 82% 15% / <alpha-value>)",
    30: "hsl(214deg 82% 25% / <alpha-value>)",
    40: "hsl(214deg 82% 35% / <alpha-value>)",
    50: "hsl(214deg 82% 45% / <alpha-value>)",

    /**
     * Secondary Blue, Action Blue.
     */
    60: "hsl(214deg 82% 55% / <alpha-value>)",
    70: "hsl(214deg 82% 65% / <alpha-value>)",
    80: "hsl(214deg 82% 75% / <alpha-value>)",
    90: "hsl(214deg 82% 85% / <alpha-value>)",
  },

  /**
   * Violet.
   * Based on #690BE5.
   */
  violet: {
    10: "hsl(266deg 91% 7% / <alpha-value>)",
    20: "hsl(266deg 91% 17% / <alpha-value>)",
    30: "hsl(266deg 91% 27% / <alpha-value>)",

    /**
     * Discovery Violet.
     */
    40: "hsl(266deg 91% 37% / <alpha-value>)",
    50: "hsl(266deg 91% 47% / <alpha-value>)",
    60: "hsl(266deg 91% 57% / <alpha-value>)",
    70: "hsl(266deg 91% 67% / <alpha-value>)",
    80: "hsl(266deg 91% 77% / <alpha-value>)",
    90: "hsl(266deg 91% 87% / <alpha-value>)",
  },

  /**
   * Gray.
   * Based on #726D97.
   */
  gray: {
    10: "hsl(247deg 17% 11% / <alpha-value>)",
    20: "hsl(247deg 17% 21% / <alpha-value>)",
    30: "hsl(247deg 17% 31% / <alpha-value>)",
    40: "hsl(247deg 17% 41% / <alpha-value>)",

    /**
     * Neutral, Neutral Muted (with opacity), Neutral Subtle (with opacity).
     */
    50: "hsl(247deg 17% 51% / <alpha-value>)",
    60: "hsl(247deg 17% 61% / <alpha-value>)",
    70: "hsl(247deg 17% 71% / <alpha-value>)",

    /**
     * Neutral Light Muted (with opacity), Neutral Light Subtle (with opacity).
     */
    80: "hsl(247deg 17% 81% / <alpha-value>)",
    90: "hsl(247deg 17% 91% / <alpha-value>)",
  },
};

/**
 * The Core Colour Palette.
 *
 * Second Tier Tokens (Source: {@link https://uxdesign.cc/9454818ed7cb}).
 *
 * **Global colour tokens.**
 * These colours are named according to their meaning and use, such as
 * ```primary-blue```, wherein ```primary-blue``` refers to ```blue-20```.
 *
 * **Also Known As**
 *
 * Source: {@link https://uxdesign.cc/9454818ed7cb}.
 *
 * - **Semantic Tokens**
 * - Alias Tokens
 * - Applied Tokens
 * - Purpose Tokens
 * - Common Tokens
 * - Application Tokens
 * - Decision Tokens
 * - Public Tokens
 *
 * {@link https://uxdesign.cc/9454818ed7cb}.
 * {@link https://primer.style/primitives/colors#functional-variables}.
 * {@link https://atlassian.design/foundations/color#primary-palette}.
 * {@link https://atlassian.design/foundations/color#secondary-palette}.
 * {@link https://spectrum.adobe.com/page/design-tokens/#Alias-tokens}.
 * {@link https://dev.to/ynab/a-semantic-color-system-the-theory-hk7}.
 * {@link https://frontside.com/blog/2021-01-15-design-tokens-and-components/}.
 * {@link https://medium.com/p/505d0f3509c1#0322}.
 *
 * @since 2.0.0
 * @author Dom Webber <dom.webber@hotmail.com>
 */
const semantic = {
  primary: {
    /**
     * Primary Blue.
     * ```semantic-primary-blue```
     */
    blue: core["blue"][20],

    /**
     * Primary White.
     * ```semantic-primary-white```
     */
    white: core["white"],

    /**
     * Primary Black.```
     */
    black: core["black"],
  },
  secondary: {
    /**
     * Secondary Blue.
     * ```semantic-secondary-blue`
     */
    blue: core["blue"][40],

    /**
     * Secondary Red.
     * ```semantic-secondary-red```
     */
    red: core["red"][30],
  },
  neutral: {
    /**
     * Neutral.
     * ```semantic-neutral```
     */
    DEFAULT: core["gray"][50].replace("<alpha-value>", "1"),

    /**
     * Neutral Muted.
     * ```semantic-neutral-muted```
     */
    muted: core["gray"][50].replace("<alpha-value>", "0.5"),

    /**
     * Neutral Subtle.
     * ```semantic-neutral-subtle```
     */
    subtle: core["gray"][50].replace("<alpha-value>", "0.4"),
    // Note: The above neutral colors currently have no decided meaning or use-case

    light: {
      /**
       * Neutral Light.
       * ```semantic-neutral-light```
       */
      DEFAULT: core["white"].replace("<alpha-value>", "1"),

      /**
       * Neutral Muted.
       * ```semantic-neutral-light-muted```
       */
      muted: core["gray"][80].replace("<alpha-value>", "0.3"),

      /**
       * Neutral Subtle.
       * ```semantic-neutral-light-subtle```
       */
      subtle: core["gray"][80].replace("<alpha-value>", "0.2"),
    },

    dark: {
      /**
       * Neutral Dark.
       * ```semantic-neutral-dark```
       */
      DEFAULT: core["black"].replace("<alpha-value>", "1"),

      /**
       * Neutral Dark Muted.
       * ```semantic-neutral-dark-muted```
       */
      muted: core["black"].replace("<alpha-value>", "0.5"),

      /**
       * Neutral Dark Subtle.
       * ```semantic-neutral-dark-subtle```
       */
      subtle: core["black"].replace("<alpha-value>", "0.4"),
    },
  },

  positive: {
    /**
     * Positive.
     * ```semantic-positive```
     */
    DEFAULT: core["green"][40].replace("<alpha-value>", "1"),

    /**
     * Positive Muted.
     * ```semantic-positive-muted```
     */
    muted: core["green"][40].replace("<alpha-value>", "0.4"),

    /**
     * Positive Subtle.
     * ```semantic-positive-subtle```
     */
    subtle: core["green"][40].replace("<alpha-value>", "0.2"),
  },

  warning: {
    /**
     * Warning.
     * ```semantic-warning```
     */
    DEFAULT: core["yellow"][40].replace("<alpha-value>", "1"),

    /**
     * Warning Muted.
     * ```semantic-warning-muted```
     */
    muted: core["yellow"][40].replace("<alpha-value>", "0.4"),

    /**
     * Warning Subtle.
     * ```semantic-warning-subtle```
     */
    subtle: core["yellow"][40].replace("<alpha-value>", "0.2"),
  },

  severe: {
    /**
     * Severe.
     * ```semantic-severe```
     */
    DEFAULT: core["orange"][40].replace("<alpha-value>", "1"),

    /**
     * Severe Muted.
     * ```semantic-severe-muted```
     */
    muted: core["orange"][40].replace("<alpha-value>", "0.4"),

    /**
     * Severe Subtle.
     * ```semantic-severe-subtle```
     */
    subtle: core["orange"][40].replace("<alpha-value>", "0.2"),
  },

  negative: {
    /**
     * Negative.
     * ```semantic-negative```
     */
    DEFAULT: core["red"][40].replace("<alpha-value>", "1"),

    /**
     * Negative Muted.
     * ```semantic-negative-muted```
     */
    muted: core["red"][40].replace("<alpha-value>", "0.4"),

    /**
     * Negative Subtle.
     * ```semantic-negative-subtle```
     */
    subtle: core["red"][40].replace("<alpha-value>", "0.2"),
  },

  discovery: {
    /**
     * Discovery.
     * ```semantic-discovery```
     */
    DEFAULT: core["violet"][40].replace("<alpha-value>", "1"),

    /**
     * Discovery Muted.
     * ```semantic-discovery-muted```
     */
    muted: core["violet"][40].replace("<alpha-value>", "0.4"),

    /**
     * Discovery Subtle.
     * ```semantic-discovery-subtle```
     */
    subtle: core["violet"][40].replace("<alpha-value>", "0.2"),
  },

  action: {
    /**
     * Action.
     * ```semantic-action```
     */
    DEFAULT: core["blue"][50].replace("<alpha-value>", "1"),

    /**
     * Action Muted.
     * ```semantic-action-muted```
     */
    muted: core["blue"][50].replace("<alpha-value>", "0.4"),

    /**
     * Action Subtle.
     * ```semantic-action-subtle```
     */
    subtle: core["blue"][50].replace("<alpha-value>", "0.2"),
  },
};

// const component = {}; // TBD

export { core, semantic };
