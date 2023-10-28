import { useNavigate } from 'react-router-dom';
import * as S from './styles';

export const Posts = () => {
  const navigate = useNavigate();

  const handleOnClick = () => {
    navigate('/post');
  }

  return (
    <S.Post onClick={handleOnClick}>
      <S.Title>
        <strong>Teste teste teste teste teste teste teste teste teste teste teste teste teste</strong>
        <p>Há 1 dia</p>
      </S.Title>

      <S.Description>
        duisahbfduisahfuisahrfuisafhsauifhuisafhsuai
        dhsauihdsuaihduasidhasuidhsauidhasuidhsauidsha
        hduisahduisahdsauidhsauidhsauidhsauidhsauidhsauidh
        dhsauidhsauidhsauidhasuidhsaidhsauidsauihd
      </S.Description>
    </S.Post>
  );
}