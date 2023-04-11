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
import useAppPagination from 'hooks/useAppPagination';
import { processingError } from 'helpers';
import { searchRecipesMessage } from 'constants/message';
import NotFoundRecipe from 'components/NotFoundRecipe';
import MainLoader from 'components/MainLoader/MainLoader';

export default function OwnRecipes() {
  const pagination = useRef({
    page: 1,
    totalPages: 1,
  });
  const [recipesList, setRecipesList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getRecipes = useCallback(async (p = 1, l = 4) => {
    setIsLoading(true);

    try {
      const { data } = await getOwnRecipesService(p, l);
      const { recipes, limit, total, page } = data;

      pagination.current.totalPages = Math.ceil(total / limit);
      pagination.current.page = page;

      setRecipesList(recipes);
    } catch (error) {
      processingError(error);
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

  const { Component: Pagination } = useAppPagination({
    totalPages: pagination.current.totalPages,
    page: pagination.current.page,
    onFetch: getRecipes,
  });

  useEffect(() => {
    getRecipes();
  }, [getRecipes]);

  return (
    <OwnRecipesSection>
      <OwnRecipesContainer>
        <OwnRecipesTitle>My recipes</OwnRecipesTitle>
        <OwnRecipesContextProvider value={{ removeOwnRecipe }}>
          {isLoading ? (
            <MainLoader />
          ) : recipesList.length > 0 ? (
            <OwnRecipesList recipes={recipesList} />
          ) : (
            <NotFoundRecipe message={searchRecipesMessage.ownRecipesNotFound} />
          )}
        </OwnRecipesContextProvider>
        {pagination.current.totalPages > 1 && <Pagination />}
      </OwnRecipesContainer>
    </OwnRecipesSection>
  );
}
