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
   * #ffffff
   */
  white: "hsl(0 0% 100% / <alpha-value>)",

  /**
   * #020B17
   *
   * @see core.blue[10];
   */
  black: "hsl(214 82% 5% / <alpha-value>)",

  /**
   * Red.
   * Based on #D84231.
   */
  red: {
    /**
     * #330e0a
     */
    10: "hsl(6 68% 12% / <alpha-value>)",

    /**
     * #5e1a12
     */
    20: "hsl(6 68% 22% / <alpha-value>)",

    /**
     * #89251a
     */
    30: "hsl(6 68% 32% / <alpha-value>)",

    /**
     * #b43122
     */
    40: "hsl(6 68% 42% / <alpha-value>)",

    /**
     * #d84231
     */
    50: "hsl(6 68% 52% / <alpha-value>)",

    /**
     * #e0695c
     */
    60: "hsl(6 68% 62% / <alpha-value>)",

    /**
     * #e89187
     */
    70: "hsl(6 68% 72% / <alpha-value>)",

    /**
     * #f0b8b2
     */
    80: "hsl(6 68% 82% / <alpha-value>)",

    /**
     * #f8e0dd
     */
    90: "hsl(6 68% 92% / <alpha-value>)",
  },

  /**
   * Orange.
   * Based on #FF7214.
   */
  orange: {
    /**
     * #471d00
     */
    10: "hsl(24 100% 14% / <alpha-value>)",

    /**
     * #7a3100
     */
    20: "hsl(24 100% 24% / <alpha-value>)",

    /**
     * #ad4500
     */
    30: "hsl(24 100% 34% / <alpha-value>)",

    /**
     * #e05a00
     */
    40: "hsl(24 100% 44% / <alpha-value>)",

    /**
     * #ff7214
     */
    50: "hsl(24 100% 54% / <alpha-value>)",

    /**
     * #ff9147
     */
    60: "hsl(24 100% 64% / <alpha-value>)",

    /**
     * #ffaf7a
     */
    70: "hsl(24 100% 74% / <alpha-value>)",

    /**
     * #ffcead
     */
    80: "hsl(24 100% 84% / <alpha-value>)",

    /**
     * #ffede0
     */
    90: "hsl(24 100% 94% / <alpha-value>)",
  },

  /**
   * Yellow.
   * Based on #DFC416.
   */
  yellow: {
    /**
     * #252104
     */
    10: "hsl(52 82% 8% / <alpha-value>)",

    /**
     * #544a08
     */
    20: "hsl(52 82% 18% / <alpha-value>)",

    /**
     * #82720d
     */
    30: "hsl(52 82% 28% / <alpha-value>)",

    /**
     * #b09b11
     */
    40: "hsl(52 82% 38% / <alpha-value>)",

    /**
     * #dfc416
     */
    50: "hsl(52 82% 48% / <alpha-value>)",

    /**
     * #ecd43c
     */
    60: "hsl(52 82% 58% / <alpha-value>)",

    /**
     * #f0de6a
     */
    70: "hsl(52 82% 68% / <alpha-value>)",

    /**
     * #f5e999
     */
    80: "hsl(52 82% 78% / <alpha-value>)",

    /**
     * #f9f3c7
     */
    90: "hsl(52 82% 88% / <alpha-value>)",
  },

  /**
   * Green.
   * Based on #51B358.
   */
  green: {
    /**
     * #112713
     */
    10: "hsl(124 39% 11% / <alpha-value>)",

    /**
     * #214a23
     */
    20: "hsl(124 39% 21% / <alpha-value>)",

    /**
     * #306e34
     */
    30: "hsl(124 39% 31% / <alpha-value>)",

    /**
     * #409145.
     */
    40: "hsl(124 39% 41% / <alpha-value>)",

    /**
     * #51b358
     */
    50: "hsl(124 39% 51% / <alpha-value>)",

    /**
     * #75c27a
     */
    60: "hsl(124 39% 61% / <alpha-value>)",

    /**
     * #98d29c
     */
    70: "hsl(124 39% 71% / <alpha-value>)",

    /**
     * #bce1be
     */
    80: "hsl(124 39% 81% / <alpha-value>)",

    /**
     * #dff1e0
     */
    90: "hsl(124 39% 91% / <alpha-value>)",
  },

  /**
   * Blue.
   * Based on #2E7DEA.
   */
  blue: {
    /**
     * 020b17
     */
    10: "hsl(214 82% 5% / <alpha-value>)",

    /**
     * #072246
     */
    20: "hsl(214 82% 15% / <alpha-value>)",

    /**
     * #0b3974
     */
    30: "hsl(214 82% 25% / <alpha-value>)",

    /**
     * #104fa2
     */
    40: "hsl(214 82% 35% / <alpha-value>)",

    /**
     * #1566d1
     */
    50: "hsl(214 82% 45% / <alpha-value>)",

    /**
     * #2e80ea
     */
    60: "hsl(214 82% 55% / <alpha-value>)",

    /**
     * #5d9cef
     */
    70: "hsl(214 82% 65% / <alpha-value>)",

    /**
     * #8bb8f4
     */
    80: "hsl(214 82% 75% / <alpha-value>)",

    /**
     * #b9d5f8
     */
    90: "hsl(214 82% 85% / <alpha-value>)",
  },

  /**
   * Violet.
   * Based on #690BE5.
   */
  violet: {
    /**
     * #100222
     */
    10: "hsl(266 91% 7% / <alpha-value>)",

    /**
     * #260453
     */
    20: "hsl(266 91% 17% / <alpha-value>)",

    /**
     * #3c0684
     */
    30: "hsl(266 91% 27% / <alpha-value>)",

    /**
     * #5308b4
     */
    40: "hsl(266 91% 37% / <alpha-value>)",

    /**
     * #690be5
     */
    50: "hsl(266 91% 47% / <alpha-value>)",

    /**
     * #842ef5
     */
    60: "hsl(266 91% 57% / <alpha-value>)",

    /**
     * #a15ef7
     */
    70: "hsl(266 91% 67% / <alpha-value>)",

    /**
     * #bd8ffa
     */
    80: "hsl(266 91% 77% / <alpha-value>)",

    /**
     * #dac0fc
     */
    90: "hsl(266 91% 87% / <alpha-value>)",
  },

  /**
   * Gray.
   * Based on #726D97.
   */
  gray: {
    /**
     * #181721
     */
    10: "hsl(247 17% 11% / <alpha-value>)",

    /**
     * #2f2c3f
     */
    20: "hsl(247 17% 21% / <alpha-value>)",

    /**
     * #45425c
     */
    30: "hsl(247 17% 31% / <alpha-value>)",

    /**
     * #5b577a
     */
    40: "hsl(247 17% 41% / <alpha-value>)",

    /**
     * #726d97
     */
    50: "hsl(247 17% 51% / <alpha-value>)",

    /**
     * #8f8bac
     */
    60: "hsl(247 17% 61% / <alpha-value>)",

    /**
     * #aba8c2
     */
    70: "hsl(247 17% 71% / <alpha-value>)",

    /**
     * #c8c6d7
     */
    80: "hsl(247 17% 81% / <alpha-value>)",

    /**
     * #e5e4ec
     */
    90: "hsl(247 17% 91% / <alpha-value>)",
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
  fg: {
    /**
     * Default foreground colour.
     * This colour should be used for default text and icons in an interface.
     * It should be used for body content, titles and labels.
     */
    DEFAULT: core["blue"][10].replace("<alpha-value>", "1"),

    /**
     * Muted foreground colour.
     * This colour should be used for content that is secondary or that
     * provides additional context but is not critical to understanding the
     * flow of an interface.
     */
    muted: core["blue"][10].replace("<alpha-value>", "0.85"),

    /**
     * Subtle foreground colour.
     * This colour should be used for placeholder text, icons or decorative
     * foregrounds.
     */
    subtle: core["blue"][10].replace("<alpha-value>", "0.75"),

    on: {
      emphasis: {
        /**
         * On Emphasis foreground colour.
         * This colour should be used for foreground elements on emphasis
         * variants of background colours.
         */
        DEFAULT: core["white"].replace("<alpha-value>", "1"),
      },
    },

    /**
     * Action foreground colour.
     * This colour should be used for interactive text or icons like links or
     * buttons.
     */
    action: core["blue"][30].replace("<alpha-value>", "1"),

    /**
     * Positive foreground colour.
     * This colour should be used to emphasise a positive or successful message.
     */
    positive: core["green"][20].replace("<alpha-value>", "1"),

    /**
     * Warning foreground colour.
     * This colour should be used to highlight text or icons that require the
     * user's attention - this doesn't guarantee that action needs to be taken.
     */
    warning: core["yellow"][20].replace("<alpha-value>", "1"),

    /**
     * Severe foreground colour.
     * This colour should be used to emphasise a level of severity between
     * warning and negative.
     */
    severe: core["orange"][20].replace("<alpha-value>", "1"),

    /**
     * Negative foreground colour.
     * This colour should be used to emphasise an error or blocking state
     * wherein action is required.
     */
    negative: core["red"][30].replace("<alpha-value>", "1"),

    /**
     * Discovery foreground colour.
     * This colour should be used for "discovery" foreground elements, such as
     * those relating to "support" or "something new".
     */
    discovery: core["violet"][40].replace("<alpha-value>", "1"),
  },

  bg: {
    /**
     * Emphasis background colour.
     * This colour should be used for elements such as tooltips that provide
     * additional information. It provides the highest contrast against the
     * default background.
     */
    emphasis: core["blue"][10].replace("<alpha-value>", "1"),

    /**
     * Default background colour.
     * This colour should be used as the primary background colour for all
     * visual pages.
     */
    DEFAULT: core["white"].replace("<alpha-value>", "1"),

    /**
     * Subtle background colour.
     * This colour should be used to provide visual rest and contrast against
     * the default background.
     */
    subtle: core["gray"][80].replace("<alpha-value>", "0.3"),

    /**
     * Inset background colour.
     * This colour can be used instead of the default background to create a
     * focal point within a page, such as conversations or activity feeds,
     * wherein cards or additional surfaces within the page use a different
     * and contrasting background colour.
     */
    inset: core["gray"][80].replace("<alpha-value>", "0.2"),

    action: {
      DEFAULT: core["blue"][40].replace("<alpha-value>", "0.2"),

      emphasis: core["blue"][50].replace("<alpha-value>", "1"),
    },

    positive: {
      DEFAULT: core["green"][40].replace("<alpha-value>", "0.2"),

      emphasis: core["green"][50].replace("<alpha-value>", "1"),
    },

    warning: {
      DEFAULT: core["yellow"][40].replace("<alpha-value>", "0.2"),

      emphasis: core["yellow"][50].replace("<alpha-value>", "1"),
    },

    severe: {
      DEFAULT: core["orange"][40].replace("<alpha-value>", "0.2"),

      emphasis: core["orange"][50].replace("<alpha-value>", "1"),
    },

    negative: {
      DEFAULT: core["red"][40].replace("<alpha-value>", "0.2"),

      emphasis: core["red"][50].replace("<alpha-value>", "1"),
    },

    discovery: {
      DEFAULT: core["violet"][40].replace("<alpha-value>", "0.2"),

      emphasis: core["violet"][50].replace("<alpha-value>", "1"),
    },
  },

  border: {
    DEFAULT: core["gray"][50].replace("<alpha-value>", "0.1"),

    muted: core["gray"][70].replace("<alpha-value>", "0.1"),

    action: {
      DEFAULT: core["blue"][40].replace("<alpha-value>", "0.4"),

      emphasis: core["blue"][40].replace("<alpha-value>", "1"),
    },

    positive: {
      DEFAULT: core["green"][40].replace("<alpha-value>", "0.4"),

      emphasis: core["green"][40].replace("<alpha-value>", "1"),
    },

    warning: {
      DEFAULT: core["yellow"][40].replace("<alpha-value>", "0.4"),

      emphasis: core["yellow"][40].replace("<alpha-value>", "1"),
    },

    severe: {
      DEFAULT: core["orange"][40].replace("<alpha-value>", "0.4"),

      emphasis: core["orange"][40].replace("<alpha-value>", "1"),
    },

    negative: {
      DEFAULT: core["red"][40].replace("<alpha-value>", "0.4"),

      emphasis: core["red"][40].replace("<alpha-value>", "1"),
    },

    discovery: {
      DEFAULT: core["violet"][40].replace("<alpha-value>", "0.4"),

      emphasis: core["violet"][40].replace("<alpha-value>", "1"),
    },
  },
};

// const component = {}; // TBD

export { core, semantic };
