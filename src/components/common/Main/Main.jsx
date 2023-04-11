import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { MainContainer } from './Main.styled';
import MainLoader from 'components/MainLoader/MainLoader';

export default function MainSection() {
  return (
    <MainContainer>
      <Suspense fallback={<MainLoader />}>
        <Outlet />
      </Suspense>
    </MainContainer>
  );
}
