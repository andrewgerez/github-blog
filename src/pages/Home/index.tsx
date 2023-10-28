import { Posts } from './components/Posts';
import { Profile } from './components/Profile';
import * as S from './styles';

export const Home = () => {

  return (
    <S.Container>
      <Profile />
      <S.Search>
        <header>
          <strong>Publicações</strong>
          <p>6 publicações</p>
        </header>

        <input type='text' placeholder='Buscar conteúdo' />
      </S.Search>

      <S.PostsGrid>
        <Posts />
        <Posts />
        <Posts />
        <Posts />
      </S.PostsGrid>
    </S.Container>
  );
}