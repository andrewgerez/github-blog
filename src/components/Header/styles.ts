import { styled } from "../../styles";

export const Container = styled('header', {
  position: 'relative',
  zIndex: '-1',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  '> img': {
    width: '100%',
    height: '18.5rem',
  }
});

export const Logo = styled('span', {
  position: 'absolute',
  zIndex: 1,

  width: '9.25rem',
  height: '6.125rem',

  marginBottom: '2.1875rem',
});