import { styled } from "../../styles";

export const Container = styled('main', {
  display: 'flex',
  flexDirection: 'column',
});

export const Search = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '0.75rem',

  header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: '4.5rem',

    strong: {
      fontSize: '1.125rem',
      color: '$blue200',
    },

    p: {
      fontSize: '0.875rem',
      color: '$blue300',
    }
  },

  input: {
    height: '3.125rem',
    backgroundColor: '$blue900',
    border: '1px solid $blue500',
    borderRadius: '0.375rem',
    padding: '0.75rem 1rem',
    fontSize: '1rem',
    color: '$white',

    '&::placeholder': {
      color: '$blue400',
    },
  },
});

export const PostsGrid = styled('div', {
  display: 'grid',
  alignItems: 'center',
  justifyContent: 'center',
  gridTemplateColumns: 'repeat(2, 1fr)',
  gap: '2rem',
  marginTop: '3rem',
});