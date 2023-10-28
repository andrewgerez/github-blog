import { styled } from "../../styles";

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '2.5rem',

  section: {
    display: 'flex',
    gap: '1.5rem',
    marginTop: '0.5rem',
  },

  h3: {
    fontSize: '1.5rem',
    color: '$white',
  }
});

export const PostInfo = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  height: '10.5rem',
  padding: '2rem 2rem 2rem 2.5rem',
  borderRadius: '0.625rem',
  backgroundColor: '$blue700',
  boxShadow: '0 2px 20px rgba(0, 0, 0, 0.2)',

  header: {
    width: '100%',
    height: '1.25rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: '1.25rem',

    span: {
      display: 'flex',
      color: '$blue',
      gap: '0.5rem',
  
      a: {
        fontSize: '0.75rem',
        fontWeight: 'bold',
        textDecoration: 'none',
        color: '$blue',
      },
  
      svg: {
        width: '0.75rem',
        height: '0.75rem',
      }
    },
    button: {
      display: 'flex',
      border: 'none',
      background: 'transparent',
      color: '$blue',
      gap: '0.5rem',
      fontSize: '0.75rem',
      fontWeight: 'bold',
  
      svg: {
        width: '0.75rem',
        height: '0.75rem',
      }
    },
  },
});

export const Badge = styled('span', {
  display: 'flex',
  alignItems: 'center',
  gap: '0.25rem',

  fontSize: '1rem',
  color: '$blue400',

  svg: {
    color: '$blue400',
    width: '1.125rem',
    height: '1.125rem',
  },
});

export const PostContent = styled('main', {
  padding: '2.5rem 2rem',
});