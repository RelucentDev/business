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
        '"Oxygen", sans-serif',
        ...defaultTheme.fontFamily.sans,
      ],
      display: [
        '"FuturaPTWebBold", sans-serif',
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
