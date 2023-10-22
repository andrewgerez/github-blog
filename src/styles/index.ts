import { createStitches } from "@stitches/react";

export const {
  config,
  styled,
  css,
  globalCss,
  getCssText,
  createTheme,
} = createStitches({
  theme: {
    colors: {
      white: '#E7EDF4',

      blue: '#3294F8',

      blue100: '#C4D4E3',
      blue200: '#AFC2D4',
      blue300: '#7B96B2',
      blue400: '#3A536B',
      blue500: '#1C2F41',
      blue600: '#112131',
      blue700: '#0B1B2B',
      blue800: '#071422',
      blue900: '#040F1A',
    },
  }
});