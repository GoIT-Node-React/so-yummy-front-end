import { privateApi } from './api';

export const getRecipeInfoById = async recipeId => {
  const { data } = await privateApi.get(`/recipes/${recipeId}`);

  return data;
};

export const getOwnRecipesService = async (page = 1, limit = 4) => {
  const { data } = await privateApi.get(
    `/own-recipes?page=${page}&limit=${limit}`
  );

  return data;
};
