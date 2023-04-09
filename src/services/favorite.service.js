import { privateApi } from './api';

export const addRecipeToFavoriteService = async recipeId => {
  const { data } = await privateApi.post(`/favorite`, { recipeId });

  return data;
};

export const deleteRecipeFromFavoriteService = async recipeId => {
  const { data } = await privateApi.delete(`/favorite/${recipeId}`);

  return data;
};
