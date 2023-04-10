import { privateApi } from './api';

export const getFavoritesService = async (page = 1, limit = 4) => {
  const { data } = await privateApi.get(
    `/favorite?page=${page}&limit=${limit}`
  );

  return data;
};

export const addRecipeToFavoriteService = async recipeId => {
  const { data } = await privateApi.post(`/favorite`, { recipeId });

  return data;
};

export const deleteRecipeFromFavoriteService = async recipeId => {
  const { data } = await privateApi.delete(`/favorite/${recipeId}`);

  return data;
};
