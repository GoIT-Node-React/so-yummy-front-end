import { Suspense } from 'react';
import { CategoryList } from '../../components/CategoryList/CategoryList';
import { Outlet } from 'react-router-dom';
import {
  StyledEngineProvider,
  ThemeProvider,
  createTheme,
} from '@mui/material';

const t = createTheme({});
export default function CategoriesPage() {
  return (
    <>
      <h1>Categories</h1>

      <ThemeProvider theme={t}>
        <CategoryList />
        <Suspense fallback={<>Loading...</>}>
          <Outlet />
        </Suspense>
      </ThemeProvider>
    </>
  );
}
