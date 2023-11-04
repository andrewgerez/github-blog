import { globalCss } from '.';

const resolution: number = window.innerWidth;
const defaultResolution = 1440;

const percentagePerRes = (resolution * 100) / defaultResolution;
const percentageInPx = (16 * percentagePerRes) / 100;

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
  },

  ':root': {
    fontSize: `${percentageInPx}px`,
  },

  body: {
    backgroundColor: '$blue800',
    color: '$blue200',
    fontFamily: 'Nunito',
    fontWeight: 400,
    lineHeight: 1.6,
    
    '-webkit-font-smoothing': 'antialiased',
  },

  '::-webkit-scrollbar': {
    width: '0.5rem',
  },

  '::-webkit-scrollbar-track': {
    backgroundColor: '$blue500',
  },

  '::-webkit-scrollbar-thumb': {
    backgroundColor: '$blue700',
  },
});