import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

export default function SharedLayout() {
  return (
    <>
      <header>
        <h1>Header</h1>
      </header>
      <main>
        <Suspense fallback={<h2>Loading...</h2>}>
          <Outlet />
        </Suspense>
      </main>
      <footer></footer>
    </>
  );
}
