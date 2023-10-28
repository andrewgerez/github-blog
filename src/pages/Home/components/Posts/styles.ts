import { styled } from "../../../../styles";

export const Post = styled('div', {
  width: '26rem',
  height: '16.25rem',
  padding: '2rem',
  borderRadius: '0.625rem',
  backgroundColor: '$blue600',
});

export const Title = styled('span', {
  display: 'flex',
  flexDirection: 'space-between',
  marginBottom: '1.25rem',

  strong: {
    display: '-webkit-box',
    fontSize: '1.25rem',
    color: '$white',
    maxWidth: '17.6rem',
    overflow: 'hidden',
    '-webkit-line-clamp': 2,
    '-webkit-box-orient': 'vertical',
  },

  p: {
    fontSize: '0.875rem',
    color: '$blue300',
  }
});

export const Description = styled('p', {
  display: '-webkit-box',
  fontSize: '1rem',
  color: '$blue200',
  overflow: 'hidden',
  '-webkit-line-clamp': 4,
  '-webkit-box-orient': 'vertical',
});