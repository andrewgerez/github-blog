import { Header } from '../components/Header';
import * as S from './styles';
import { Outlet } from 'react-router-dom';

export const MainLayout = () => {
  return (
    <>
      <Header />
      <S.MainLayout>
        <Outlet />
      </S.MainLayout>
    </>
  );
}