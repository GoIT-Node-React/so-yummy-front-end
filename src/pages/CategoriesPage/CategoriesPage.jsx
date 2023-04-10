import { Suspense } from 'react';
import { CategoryList } from '../../components/CategoryList/CategoryList';
import { Outlet } from 'react-router-dom';

export default function CategoriesPage() {
  return (
    <>
      <h1>Categories</h1>

      <CategoryList />
      <Suspense fallback={<>Loading...</>}>
        <Outlet />
      </Suspense>
    </>
  );
}
