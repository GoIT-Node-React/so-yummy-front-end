import { useCallback, useEffect, useRef, useState } from 'react';
import {
  OwnRecipesContainer,
  OwnRecipesSection,
  OwnRecipesTitle,
} from './OwnRecipes.styled';
import {
  getOwnRecipesService,
  removeOwnRecipesService,
} from 'services/recipe.service';
import OwnRecipesList from './OwnRecipesList/OwnRecipesList';
import OwnRecipesContextProvider from './OwnRecipes.context';

import usePagination from '@mui/material/usePagination/usePagination';
import { styled } from '@mui/material/styles';
import Pagination from 'components/common/Pagination';

const List = styled('ul')({
  listStyle: 'none',
  padding: 0,

  display: 'flex',
  justifyContent: 'center',
});

export default function OwnRecipes() {
  const pagination = useRef({
    page: 1,
    totalPages: 1,
  });

  const { items } = usePagination({
    count: pagination.current.totalPages,
    defaultPage: 1,
    page: pagination.current.page,

    onChange: async evt => {
      const {
        target: { textContent },
      } = evt;
      let page = pagination.current.page;
      if (textContent === '>') {
        page += 1;
      } else if (textContent === '<') {
        page -= 1;
      } else {
        page = +textContent;
      }

      getRecipes(page);
    },
  });

  const [recipesList, setRecipesList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getRecipes = useCallback(async (p = 1, l = 4) => {
    setIsLoading(true);

    try {
      const { data } = await getOwnRecipesService(p, l);
      const { recipes, limit, total, page } = data;

      pagination.current = { totalPages: Math.ceil(total / limit), page };

      setRecipesList(recipes);
    } catch (error) {
    } finally {
      setIsLoading(false);
    }
  }, []);

  const removeOwnRecipe = useCallback(
    async recipeId => {
      const page =
        recipesList.length === 1
          ? pagination.current.page === 1
            ? 1
            : pagination.current.page - 1
          : pagination.current.page;
      await removeOwnRecipesService(recipeId);

      await getRecipes(page);
    },
    [getRecipes, recipesList]
  );

  useEffect(() => {
    getRecipes();
  }, [getRecipes]);

  return (
    <OwnRecipesSection>
      <OwnRecipesContainer>
        <OwnRecipesTitle>MyRecipes</OwnRecipesTitle>
        <OwnRecipesContextProvider value={{ removeOwnRecipe }}>
          {isLoading ? (
            <>Loading...</>
          ) : (
            <OwnRecipesList recipes={recipesList} />
          )}
        </OwnRecipesContextProvider>
        <Pagination items={items} />
      </OwnRecipesContainer>
    </OwnRecipesSection>
  );
}
