import { useNavigate } from 'react-router-dom';
import * as S from './styles';
import { Issue } from '../../../../interfaces/issue';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

interface IPosts {
  issue: Issue;
}

export const Posts = ({ issue }: IPosts) => {
  const navigate = useNavigate();

  const handleOnClick = () => {
    window.scrollTo(0, 0);
    navigate('/post', { state: { issue: issue }});
  }

  return (
    <S.Post onClick={handleOnClick}>
      <S.Title>
        <strong>{issue.title}</strong>
        <p>Há 1 dia</p>
      </S.Title>

      <S.Description>
        <ReactMarkdown remarkPlugins={[remarkGfm]}>
          {issue.body}
        </ReactMarkdown>
      </S.Description>
    </S.Post>
  );
}