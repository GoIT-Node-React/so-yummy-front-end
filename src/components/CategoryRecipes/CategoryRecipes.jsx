import Card from 'components/common/Card/Card';
import { useCallback, useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getRecipesByCategoryService } from 'services/recipe.service';
import {
  CategoryRecipesItem,
  CategoryRecipesList,
} from './CategoryRecipes.styled';
import { routes } from 'constants/routes';
import Loader from 'components/common/Loader/Loader';
import { useMediaQuery } from 'react-responsive';
import { processingError } from 'helpers';
import useAppPagination from 'hooks/useAppPagination';

export default function CategoryRecipes() {
  const { categoryName } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [recipes, setRecipes] = useState([]);
  const isTabletOrMobile = useMediaQuery({
    maxWidth: 1439,
  });
  const pagination = useRef({
    page: 1,
    totalPages: 1,
    limit: isTabletOrMobile ? 6 : 12,
  });

  const getRecipesByCategory = useCallback(
    async (p = 1, l = pagination.current.limit) => {
      setIsLoading(true);

      try {
        const { data } = await getRecipesByCategoryService(categoryName, p, l);

        const { recipes, limit, page, total } = data;

        pagination.current = {
          totalPages: Math.ceil(total / limit),
          page,
        };

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

  useEffect(() => {
    pagination.current.limit = isTabletOrMobile ? 6 : 12;

    getRecipesByCategory(1, pagination.current.limit);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isTabletOrMobile]);

  return (
    <>
      <CategoryRecipesList>
        {isLoading && <Loader />}
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
      <Pagination />
    </>
  );
}
