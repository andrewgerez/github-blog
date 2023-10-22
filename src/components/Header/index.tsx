import * as S from './styles';
import Cover from '../../assets/header-cover.png';
import Logo from '../../assets/logo.svg';

export const Header = () => {
  return (
    <S.Container>
      <img src={Cover} alt='' />
      <S.Logo>
        <img src={Logo} alt='' />
      </S.Logo>
    </S.Container>
  );
}