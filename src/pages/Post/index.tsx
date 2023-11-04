import { ArrowLeft, CalendarBlank, ChatCircle, GithubLogo, LinkSimple } from 'phosphor-react';
import * as S from './styles';
import { useLocation } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Issue } from '../../interfaces/issue';
import { dateFormatter } from '../../utils/dateFormatter';
import { pluralFormatter } from '../../utils/pluralFormatter';

export const Post = () => {
  const issue: Issue  = useLocation().state.issue;

  return (
    <S.Container>
      <S.PostInfo>
        <header>
          <button>
            <ArrowLeft weight='bold' />
            VOLTAR
          </button>
          <span>
            <a href="https://github.com/drewdevelopment" target="_blank">
              VER NO GITHUB
            </a>
            <LinkSimple weight='bold' />
          </span>
        </header>

        <h3>{issue.title}</h3>

        <section>
          <S.Badge>
            <GithubLogo />
            drewdevelopment
          </S.Badge>

          <S.Badge>
            <CalendarBlank weight='fill' />
            {dateFormatter({ createdAt: issue.created_at })}
          </S.Badge>

          <S.Badge>
            <ChatCircle weight='fill' />
            {pluralFormatter(issue.comments, 'comentário', 'comentários')}
          </S.Badge>
        </section>
      </S.PostInfo>
      
      <S.PostContent>
        <div>
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {issue.body}
          </ReactMarkdown>
        </div>
      </S.PostContent>
    </S.Container>
  );
}