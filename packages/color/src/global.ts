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
 * The Base/Descriptive Colour Palette.
 * These are the presentational colours for the colour system. This represents
 * all colours and shades of colours available within the colour system.
 *
 * **Global colour tokens.**
 * These colours are named according to their appearance and colour value, such
 * as ```blue-500```, ```green-700```, etc.
 *
 * **Avoid direct use.**
 * Global tokens should be used sparingly. *Use aliases wherever possible.*
 *
 * This palette stands as the "Extended Palette". All usable tints and shades
 * of each colour in the palette. They are numbered for easy reference.
 * {@link https://atlassian.design/foundations/color#extended-palette}.
 * {@link https://spectrum.adobe.com/page/design-tokens/#Global-tokens}.
 * {@link https://dev.to/ynab/a-semantic-color-system-the-theory-hk7}.
 * {@link https://medium.com/p/505d0f3509c1#0322}.
 *
 * **Adding additional colours/scales**
 * {@link https://htmlcolorcodes.com/color-picker/}.
 * {@link https://www.tailwindshades.com/}.
 * {@link https://uicolors.app/create}.
 *
 * @since 2.0.0
 * @author Dom Webber <dom.webber@hotmail.com>
 */
const global = {
  /**
   * Selected Shade of White.
   *
   * @since 2.0.0
   * @author Dom Webber <dom.webber@hotmail.com>
   */
  white: "#ffffff",

  /**
   * Shades of Grey.
   *
   * @since 2.0.0
   * @author Dom Webber <dom.webber@hotmail.com>
   */
  raven: {
    DEFAULT: "#78808C",
    50: "#F1F2F3",
    100: "#E6E8EA",
    200: "#D0D3D7",
    300: "#BABEC4",
    400: "#A4A9B2",
    500: "#8E959F",
    600: "#78808C",
    700: "#5E646E",
    800: "#444950",
    900: "#2A2D32",
  },

  /**
   * Shades of Purple.
   *
   * @since 2.0.0
   * @author Dom Webber <dom.webber@hotmail.com>
   */
  "purple-heart": {
    DEFAULT: "#7743E0",
    50: "#E9E1FA",
    100: "#DCCFF7",
    200: "#C3ACF1",
    300: "#AA89EC",
    400: "#9066E6",
    500: "#7743E0",
    600: "#5921CA",
    700: "#441999",
    800: "#2F1169",
    900: "#190939",
  },

  /**
   * Shades of Blue.
   *
   * @since 2.0.0
   * @author Dom Webber <dom.webber@hotmail.com>
   */
  "royal-blue": {
    DEFAULT: "#4385E0",
    50: "#E1EBFA",
    100: "#CFE0F7",
    200: "#ACC9F1",
    300: "#89B2EC",
    400: "#669CE6",
    500: "#4385E0",
    600: "#2168CA",
    700: "#194F99",
    800: "#113669",
    900: "#091D39",
  },

  /**
   * Shades of Green.
   *
   * @since 2.0.0
   * @author Dom Webber <dom.webber@hotmail.com>
   */
  "pastel-green": {
    DEFAULT: "#43E050",
    50: "#E1FAE3",
    100: "#CFF7D2",
    200: "#ACF1B2",
    300: "#89EC91",
    400: "#66E671",
    500: "#43E050",
    600: "#21CA2F",
    700: "#199924",
    800: "#116919",
    900: "#09390D",
  },

  /**
   * Shades of Yellow.
   *
   * @since 2.0.0
   * @author Dom Webber <dom.webber@hotmail.com>
   */
  anzac: {
    DEFAULT: "#E09E43",
    50: "#FAEFE1",
    100: "#F7E6CF",
    200: "#F1D4AC",
    300: "#ECC289",
    400: "#E6B066",
    500: "#E09E43",
    600: "#CA8321",
    700: "#996419",
    800: "#694411",
    900: "#392509",
  },

  /**
   * Shades of Orange.
   *
   * @since 2.0.0
   * @author Dom Webber <dom.webber@hotmail.com>
   */
  "red-damask": {
    DEFAULT: "#E07743",
    50: "#FAE9E1",
    100: "#F7DCCF",
    200: "#F1C3AC",
    300: "#ECAA89",
    400: "#E69066",
    500: "#E07743",
    600: "#CA5921",
    700: "#994419",
    800: "#692F11",
    900: "#391909",
  },

  /**
   * Shades of Red.
   *
   * @since 2.0.0
   * @author Dom Webber <dom.webber@hotmail.com>
   */
  mandy: {
    DEFAULT: "#E0435E",
    50: "#FAE1E5",
    100: "#F7CFD6",
    200: "#F1ACB8",
    300: "#EC899A",
    400: "#E6667C",
    500: "#E0435E",
    600: "#CA213E",
    700: "#99192F",
    800: "#691120",
    900: "#390912",
  },
};

export default global;
