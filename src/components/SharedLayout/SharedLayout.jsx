import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

export default function SharedLayout() {
  return (
    <>
      <header>Header</header>
      <Suspense fallback={<h2>Loading...</h2>}>
        <Outlet />
      </Suspense>
      <footer></footer>
    </>
  );
}
