import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

export default function CategoriesPage() {
  return (
    <>
      <h1>Categories</h1>
      {/* <Suspense fallback={<>Loading...</>}> */}
      <Outlet />
      {/* </Suspense> */}
    </>
  );
}
