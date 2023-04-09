import { useCallback, useEffect, useState } from 'react';
import {
  OwnRecipesContainer,
  OwnRecipesList,
  OwnRecipesSection,
  OwnRecipesTitle,
} from './OwnRecipes.styled';
import { getOwnRecipesService } from 'services/recipe.service';

export default function OwnRecipes() {
  const [recipesList, setRecipesList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getRecipes = useCallback(async () => {
    setIsLoading(true);

    try {
      // const { data, limit, page, total } = await getOwnRecipesService();
      //setRecipesList(data.recipes);
    } catch (error) {
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    getRecipes();
  }, [getRecipes]);

  return (
    <OwnRecipesSection>
      <OwnRecipesContainer>
        <OwnRecipesTitle>MyRecipes</OwnRecipesTitle>
        <OwnRecipesList recipes={recipesList} />
      </OwnRecipesContainer>
    </OwnRecipesSection>
  );
}
