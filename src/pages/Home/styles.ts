import { styled } from "../../styles";

export const Container = styled('main', {
  display: 'flex',
  flexDirection: 'column',
});

export const Profile = styled('div', {
  display: 'flex',
  height: '13.25rem',
  padding: '2rem 2rem 2rem 2.5rem',
  borderRadius: '0.625rem',
  backgroundColor: '$blue700',

  'img': {
    width: '9.25rem',
    height: '9.25rem',
    borderRadius: '0.5rem',
  }
});