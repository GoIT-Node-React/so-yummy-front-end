import { useCallback, useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';

import { getPopularRecipesService } from 'services/recipe.service';
import PopularRecipeCard from './PopularRecipeCard';
import { Subtitle } from 'components/AddRecipeForm/AddRecipeForm.styled';
import { PopularRecipesContainer, RecipesList } from './PopularRecipes.styled';
import { theme } from 'theme';

export default function PopularRecipes() {
  const [recipes, setRecipes] = useState([]);

  const isTablet = useMediaQuery({
    query: `((min-width: calc(${theme.breakpoints[1]} - 1px)) and (max-width: calc(${theme.breakpoints[2]} - 1px)))`,
  });

  const getRecipes = useCallback(async () => {
    const { data } = isTablet
      ? await getPopularRecipesService(2)
      : await getPopularRecipesService(4);
    setRecipes(data.recipes);
  }, [isTablet]);

  useEffect(() => {
    getRecipes();
  }, [getRecipes]);

  return (
    <PopularRecipesContainer>
      <Subtitle>Popular recipe</Subtitle>
      {recipes && (
        <RecipesList>
          {recipes.map(({ _id, thumb, title, description }) => (
            <li key={_id}>
              <PopularRecipeCard
                src={thumb}
                title={title}
                text={description}
                to={`/recipe/${_id}`}
              />
            </li>
          ))}
        </RecipesList>
      )}
    </PopularRecipesContainer>
  );
}
