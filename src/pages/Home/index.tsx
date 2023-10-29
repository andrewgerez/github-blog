import { useQuery } from '@tanstack/react-query';
import * as api from '../../lib/axios';
import { Posts } from './components/Posts';
import { Profile } from './components/Profile';
import * as S from './styles';
import { Issue } from '../../interfaces/issue';
import { pluralFormatter } from '../../utils/pluralFormatter';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form';

const searchIssueSchema = z.object({
  search: z.string(),
});

type SearchIssueInput = z.infer<typeof searchIssueSchema>;

export const Home = () => {
  const { register } = useForm<SearchIssueInput>({
    resolver: zodResolver(searchIssueSchema),
  })

  const fetchIssues = async () => {
    return await api.get('search/issues?q=is:issue%20is:open%20repo:drewdevelopment/github-blog');
  }

  const { data: issues } = useQuery({
    queryKey: ['issues'],
    queryFn: fetchIssues,
  });

  return (
    <S.Container>
      <Profile />
      <S.Search>
        <header>
          <strong>Publicações</strong>
          <p>
            {pluralFormatter((issues?.total_count ?? 0), "publicação", 'publicações')}
          </p>
        </header>

        <input 
          type='text'
          placeholder='Buscar conteúdo'
          {...register('search')}
        />
      </S.Search>

      <S.PostsGrid>
        {issues?.items.map((issue: Issue) => (
          <Posts 
            key={issue.id}
            issue={issue}
          />
        ))}
      </S.PostsGrid>
    </S.Container>
  );
}