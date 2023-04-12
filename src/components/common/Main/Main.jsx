import { Suspense } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { MainContainer } from './Main.styled';
import MainLoader from 'components/MainLoader/MainLoader';
import { routes } from 'constants/routes';

export default function MainSection() {
  const { pathname } = useLocation();

  return (
    <MainContainer isMainPage={pathname === routes.MAIN_PAGE}>
      <Suspense fallback={<MainLoader />}>
        <Outlet />
      </Suspense>
    </MainContainer>
  );
}
