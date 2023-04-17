import RecipeInfo from 'components/RecipeInfo/RecipeInfo';
import { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  getRecipeInfoById,
  addRecipeToFavoriteService,
  deleteRecipeFromFavoriteService,
} from 'services/recipe.service';
import RecipeInfoContextProvider from './RecipeInfo.context';
import { useScrollToTop } from 'hooks/useScrollToTop';

export default function RecipeInfoPage() {
  useScrollToTop();
  const { recipeId } = useParams();
  const [recipeInfo, setRecipeInfo] = useState(null);

  const getRecipeInfo = useCallback(async recipeId => {
    const {
      data: { recipe },
    } = await getRecipeInfoById(recipeId);

    setRecipeInfo(recipe);
  }, []);

  const addRecipeToFavorite = useCallback(
    async recipeId => {
      await addRecipeToFavoriteService(recipeId);
      await getRecipeInfo(recipeId);
    },
    [getRecipeInfo]
  );

  const deleteRecipeFromFavorite = useCallback(
    async recipeId => {
      await deleteRecipeFromFavoriteService(recipeId);
      await getRecipeInfo(recipeId);
    },
    [getRecipeInfo]
  );

  useEffect(() => {
    getRecipeInfo(recipeId);
  }, [getRecipeInfo, recipeId]);

  return (
    <RecipeInfoContextProvider
      value={{ addRecipeToFavorite, deleteRecipeFromFavorite }}
    >
      {recipeInfo && <RecipeInfo info={recipeInfo} />}
    </RecipeInfoContextProvider>
  );
}
