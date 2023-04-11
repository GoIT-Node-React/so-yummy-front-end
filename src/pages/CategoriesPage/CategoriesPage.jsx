import { Container, ThemeProvider, createTheme } from '@mui/material';
import { Suspense, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet, useNavigate } from 'react-router-dom';
import { selectCategories } from 'redux/recipes/recipes.selectors';
import { getCategoriesThunk } from 'redux/recipes/recipes.thunk';
import {
  StyledTab,
  StyledTabs,
  CategoriesPageSection,
  CategoriesPageTitle,
} from './CategoriesPage.styled';

const localTheme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 375,
      md: 768,
      lg: 1440,
    },
  },
});

export default function CategoriesPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { data: categories } = useSelector(selectCategories);
  const [selectedCategory, setSelectedCategory] = useState(0);

  useEffect(() => {
    dispatch(getCategoriesThunk());
  }, [dispatch]);

  const changeCategoryHandler = (_evt, newValue) => {
    setSelectedCategory(newValue);
  };

  useEffect(() => {
    const category = categories[selectedCategory];

    if (category) navigate(`${category}`);
  }, [categories, navigate, selectedCategory]);

  return (
    <ThemeProvider theme={localTheme}>
      <CategoriesPageSection>
        <Container
          sx={{
            px: [null, '16px', '32px', '100px'],
            mx: 'auto',
            width: ['100%', '375px', '768px', '1440px'],
            minHeight: '100%',
          }}
        >
          <CategoriesPageTitle>Categories</CategoriesPageTitle>
          <StyledTabs
            onChange={changeCategoryHandler}
            value={selectedCategory}
            variant="scrollable"
            scrollButtons="auto"
            aria-label="Tabs categories list"
          >
            {categories.map(c => (
              <StyledTab key={c} label={c} />
            ))}
          </StyledTabs>
          <Suspense fallback={<>Loading...</>}>
            <Outlet />
          </Suspense>
        </Container>
      </CategoriesPageSection>
    </ThemeProvider>
  );
}
