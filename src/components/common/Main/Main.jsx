import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { MainContainer } from './Main.styled';

export default function MainSection() {
  return (
    <MainContainer>
      <Suspense fallback={<h2>Loading...</h2>}>
        <Outlet />
      </Suspense>
    </MainContainer>
  );
}
