/**
 * Relucent TailwindCSS Preset.
 *
 * @package   Relucent\TailwindCSSPreset
 * @license   Proprietary
 * @copyright 2022 Relucent Ltd
 * @link      https://relucent.dev
 * @since     1.0.0
 */

import type { Config } from "tailwindcss";
import { core, semantic } from "./color";
const defaultTheme = require("tailwindcss/defaultTheme");

/**
 * Relucent TailwindCSS Preset.
 * This preset applies the most common styling values and alterations to the
 * TailwindCSS system.
 *
 * @since 1.0.0
 * @author Dom Webber <dom.webber@hotmail.com
 * @see https://tailwindcss.com/
 */
const tailwindPreset: Omit<Config, "content"> = {
  theme: {
    /**
     * See {@link https://www.uxtoast.com/design-tips/5-tips-for-perfect-typography} for more typography details.
     * See {@link https://m2.material.io/design/typography/the-type-system.html#type-scale} for material design details.
     * See {@link https://www.nngroup.com/articles/guidelines-for-visualizing-links/} for details regarding link styling.
     * See {@link https://cfpb.github.io/design-system/foundation/fonts} for some typographic spacing details.
     */
    fontFamily: {
      /**
       * Montserrat.
       * Source: {@link https://fonts.google.com/specimen/Montserrat}.
       */
      display: [
        '"Montserrat", sans-serif',
        '"Arial", sans-serif',
        ...defaultTheme.fontFamily.sans,
      ],

      /**
       * Source Sans Pro.
       * Source: {@link https://fonts.google.com/specimen/Source+Sans+Pro}.
       */
      sans: [
        '"Source Sans Pro", sans-serif',
        '"Verdana", sans-serif',
        ...defaultTheme.fontFamily.sans,
      ],

      /**
       * Source Code Pro.
       * Source: {@link https://fonts.google.com/specimen/Source+Code+Pro?query=source+code+pro}.
       */
      mono: [
        '"Source Code Pro", monospace',
        '"Courier New", monospace',
        ...defaultTheme.fontFamily.mono,
      ],

      /**
       * Lora.
       * Source: {@link https://fonts.google.com/specimen/Lora}.
       */
      serif: [
        '"Lora", serif',
        '"Georgia", serif',
        ...defaultTheme.fontFamily.serif,
      ],

      /**
       * Courgette.
       * Source: {@link https://fonts.google.com/specimen/Courgette?query=courgette}.
       */
      cursive: [
        '"Courgette", cursive',
        '"Brush Script MT", cursive',
        ...defaultTheme.fontFamily.serif,
      ],
    },
    extend: {
      colors: {
        core,
        semantic,
      },
    },
  },
};

export default tailwindPreset;
