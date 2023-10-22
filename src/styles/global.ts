import { globalCss } from '.';

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
  },

  body: {
    backgroundColor: '$blue800',
    color: '$blue200',
    fontFamily: 'Nunito',
    fontWeight: 400,
    
    '-webkit-font-smoothing': 'antialiased',
  },
});