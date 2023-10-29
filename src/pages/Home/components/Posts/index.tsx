import { useNavigate } from 'react-router-dom';
import * as S from './styles';
import { Issue } from '../../../../interfaces/issue';

interface IPosts {
  issue: Issue;
}

export const Posts = ({ issue }: IPosts) => {
  const navigate = useNavigate();

  const handleOnClick = () => {
    navigate('/post');
  }

  return (
    <S.Post onClick={handleOnClick}>
      <S.Title>
        <strong>{issue.title}</strong>
        <p>Há 1 dia</p>
      </S.Title>

      <S.Description>
        {issue.body}
      </S.Description>
    </S.Post>
  );
}