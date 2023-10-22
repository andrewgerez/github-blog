import { styled } from "../../styles";

export const Container = styled('main', {
  display: 'flex',
  flexDirection: 'column',
});

export const Profile = styled('div', {
  position: 'relative',
  display: 'flex',
  height: '13.25rem',
  padding: '2rem 2rem 2rem 2.5rem',
  borderRadius: '0.625rem',
  backgroundColor: '$blue700',
  boxShadow: '0 2px 20px rgba(0, 0, 0, 0.2)',
  gap: '2rem',

  'img': {
    width: '9.25rem',
    height: '9.25rem',
    borderRadius: '0.5rem',
  },

  '>span': {
    position: 'absolute',
    display: 'flex',
    alignItems: 'center',
    right: '2rem',
    color: '$blue',
    gap: '0.5rem',

    'a': {
      fontSize: '0.75rem',
      fontWeight: 'bold',
      textDecoration: 'none',
      color: '$blue',
    },

    'svg': {
      width: '0.75rem',
      height: '0.75rem',
    }
  }
});

export const Information = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '0.5rem',

  'h3': {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: '$white',
  },

  'p': {
    display: '-webkit-box',
    fontSize: '1rem',
    color: '$blue100',
    overflow: 'hidden',
    '-webkit-line-clamp': 2,
    '-webkit-box-orient': 'vertical',
  },

  'section': {
    display: 'flex',
    gap: '1.5rem',
    marginTop: '1rem',
  },
});

export const Badge = styled('span', {
  display: 'flex',
  alignItems: 'center',
  gap: '0.5rem',

  fontSize: '1rem',
  color: '$blue100',

  'svg': {
    color: '$blue400',
    width: '1.125rem',
    height: '1.125rem',
  },
});