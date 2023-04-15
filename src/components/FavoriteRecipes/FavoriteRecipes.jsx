import { useCallback, useEffect, useRef, useState } from 'react';
import useAppPagination from 'hooks/useAppPagination';
import { processingError } from 'helpers';
import { searchRecipesMessage } from 'constants/message';
import NotFoundRecipe from 'components/NotFoundRecipe';

import {
  FavoriteRecipesContainer,
  FavoriteRecipesSection,
  FavoriteRecipesTitle,
} from './FavoriteRecipes.styled';
import FavoriteRecipesContextProvider from './FavoriteRecipes.context';
import {
  deleteRecipeFromFavoriteService,
  getFavoritesService,
} from 'services/recipe.service';
import FavoriteRecipesList from './FavoriteRecipesList';
import MainLoader from 'components/MainLoader/MainLoader';

export default function FavoriteRecipes() {
  const pagination = useRef({
    page: 1,
    totalPages: 1,
  });
  const [recipesList, setRecipesList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getRecipes = useCallback(async (p = 1, l = 4) => {
    setIsLoading(true);

    try {
      const { data } = await getFavoritesService(p, l);
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

  const removeRecipeFromFavorite = useCallback(
    async recipeId => {
      const page =
        recipesList.length === 1
          ? pagination.current.page === 1
            ? 1
            : pagination.current.page - 1
          : pagination.current.page;
      await deleteRecipeFromFavoriteService(recipeId);

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
    <FavoriteRecipesSection>
      <FavoriteRecipesContainer>
        <FavoriteRecipesTitle>Favorites</FavoriteRecipesTitle>
        <FavoriteRecipesContextProvider value={{ removeRecipeFromFavorite }}>
          {isLoading ? (
            <MainLoader />
          ) : recipesList.length > 0 ? (
            <FavoriteRecipesList recipes={recipesList} />
          ) : (
            <NotFoundRecipe message={searchRecipesMessage.favoritesNotFound} />
          )}
        </FavoriteRecipesContextProvider>
        {pagination.current.totalPages > 1 && <Pagination />}
      </FavoriteRecipesContainer>
    </FavoriteRecipesSection>
  );
}
