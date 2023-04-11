import { Box, ThemeProvider, createTheme } from '@mui/material';
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
import { Container } from 'components/common/Container.styled';

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
    <CategoriesPageSection>
      <Container>
        <CategoriesPageTitle>Categories</CategoriesPageTitle>
        <ThemeProvider theme={localTheme}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
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
          </Box>
        </ThemeProvider>
        <Suspense fallback={<>Loading...</>}>
          <Outlet />
        </Suspense>
      </Container>
    </CategoriesPageSection>
  );
}
