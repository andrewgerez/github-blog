import * as S from './styles';
import { GithubLogo, Buildings, Users, LinkSimple } from 'phosphor-react';
import { useGitData } from '../../../../hooks/useGitData';
import { pluralFormatter } from '../../../../utils/pluralFormatter';

export const Profile = () => {
  const userData = useGitData();

  return (
    <S.Container>
      <img src={userData?.avatar_url} alt="" />
      <S.Information>
        <h3>{userData?.name}</h3>
        <p>{userData?.bio}</p>

        <section>
          <S.Badge>
            <GithubLogo />
            {userData?.login}
          </S.Badge>

          <S.Badge>
            <Buildings weight='fill' />
            {userData?.company}
          </S.Badge>

          <S.Badge>
            <Users weight='duotone' />
            {pluralFormatter((userData?.followers ?? 1), 'seguidor', 'seguidores')}
          </S.Badge>
        </section>
      </S.Information>
      <span>
        <a href={`https://github.com/${userData?.login}`} target="_blank">
          GITHUB
        </a>
        <LinkSimple weight='bold' />
      </span>
    </S.Container>
  );
}