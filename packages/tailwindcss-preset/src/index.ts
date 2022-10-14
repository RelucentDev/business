import colors, { palettes } from '@relucent-software/colors';
const defaultTheme = require('tailwindcss/defaultTheme');

const tailwindPreset = {
  theme: {
    fontFamily: {
      serif: [
        '"Lora", serif',
        ...defaultTheme.fontFamily.serif,
      ],
      sans: [
        '"Source Sans Pro", sans-serif',
        ...defaultTheme.fontFamily.sans,
      ],
      display: [
        '"Montserrat", sans-serif',
        '"Arial", sans-serif',
        ...defaultTheme.fontFamily.sans,
      ],
      mono: defaultTheme.fontFamily.mono,
    },
    extend: {
      colors: {
        ...colors,
        ...palettes,
      },
    },
  }
};

export default tailwindPreset;
