import { ArrowLeft, CalendarBlank, ChatCircle, GithubLogo, LinkSimple } from 'phosphor-react';
import * as S from './styles';
import { useLocation } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

export const Post = () => {
  const issue = useLocation().state.issue;

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
            Há 1 dia
          </S.Badge>

          <S.Badge>
            <ChatCircle weight='fill' />
            5 comentários
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