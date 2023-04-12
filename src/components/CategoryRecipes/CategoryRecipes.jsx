import Card from 'components/common/Card/Card';
import { useCallback, useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getRecipesByCategoryService } from 'services/recipe.service';
import {
  CategoryRecipesItem,
  CategoryRecipesList,
  CategoryRecipesLoader,
  CategoryRecipesWrapper,
} from './CategoryRecipes.styled';
import { routes } from 'constants/routes';
import { processingError } from 'helpers';
import useAppPagination from 'hooks/useAppPagination';
import MainLoader from 'components/MainLoader/MainLoader';

export default function CategoryRecipes() {
  const { categoryName } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [recipes, setRecipes] = useState([]);
  const pagination = useRef({
    page: 1,
    totalPages: 1,
    limit: 8,
  });

  const getRecipesByCategory = useCallback(
    async (p = 1, l = pagination.current.limit) => {
      setIsLoading(true);
      const capitalized =
        categoryName.charAt(0).toUpperCase() + categoryName.slice(1);

      try {
        const { data } = await getRecipesByCategoryService(capitalized, p, l);
        const { recipes, limit, page, total } = data;

        pagination.current.totalPages = Math.ceil(total / limit);
        pagination.current.page = page;

        setRecipes(recipes);
      } catch (error) {
        processingError(error);
      } finally {
        setIsLoading(false);
      }
    },
    [categoryName]
  );

  const { Component: Pagination } = useAppPagination({
    totalPages: pagination.current.totalPages,
    page: pagination.current.page,
    onFetch: p => getRecipesByCategory(p, pagination.current.limit),
  });

  useEffect(() => {
    getRecipesByCategory();
  }, [getRecipesByCategory]);

  return (
    <>
      <CategoryRecipesWrapper>
        <CategoryRecipesList isLoading={isLoading}>
          {recipes.map(({ _id, title, thumb }) => (
            <CategoryRecipesItem key={_id}>
              <Card
                src={thumb}
                title={title}
                to={`${routes.RECIPE_PAGE}/${_id}`}
              />
            </CategoryRecipesItem>
          ))}
        </CategoryRecipesList>
        {isLoading && (
          <CategoryRecipesLoader>
            <MainLoader />
          </CategoryRecipesLoader>
        )}
      </CategoryRecipesWrapper>

      {pagination.current.totalPages > 1 && <Pagination />}
    </>
  );
}
