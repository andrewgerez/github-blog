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
import { useState, useEffect } from 'react';

const searchIssueSchema = z.object({
  search: z.string(),
});

type SearchIssueInput = z.infer<typeof searchIssueSchema>;

export const Home = () => {
  const [searchValue, setSearchValue] = useState<string>("");
  const { register } = useForm<SearchIssueInput>({
    resolver: zodResolver(searchIssueSchema),
  });

  const fetchIssues = async () => {
    return await api.get(`search/issues?q=${searchValue}%20repo:drewdevelopment/github-blog`);
  }

  const { data: issues, refetch } = useQuery({
    queryKey: ['issues'],
    queryFn: fetchIssues,
  });

  useEffect(() => {
    refetch();
  }, [refetch, searchValue]);
  
  const handleOnSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  }

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
          value={searchValue ?? ""}
          onChange={handleOnSearch}
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