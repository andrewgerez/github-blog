import { useQuery } from '@tanstack/react-query';
import * as S from './styles';
import { GithubLogo, Buildings, Users, LinkSimple } from 'phosphor-react';
import { api } from '../../../../lib/axios';
import { GitData } from '../../../../interfaces/gitData';

export const Profile = () => {

  const { data: gitUser } = useQuery<GitData>({
    queryKey: ['gitUser'],
    queryFn: async () => await api.get('users/drewdevelopment'),
  });

  return (
    <S.Container>
      <img src={gitUser?.data.avatar_url} alt="" />
      <S.Information>
        <h3>{gitUser?.data.name}</h3>
        <p>{gitUser?.data.bio}</p>

        <section>
          <S.Badge>
            <GithubLogo />
            {gitUser?.data.login}
          </S.Badge>

          <S.Badge>
            <Buildings weight='fill' />
            {gitUser?.data.company}
          </S.Badge>

          <S.Badge>
            <Users weight='duotone' />
            {gitUser?.data.followers} seguidores
          </S.Badge>
        </section>
      </S.Information>
      <span>
        <a href={`https://github.com/${gitUser?.data.login}`} target="_blank">
          GITHUB
        </a>
        <LinkSimple weight='bold' />
      </span>
    </S.Container>
  );
}