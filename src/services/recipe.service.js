import { privateApi } from './api';

export const addRecipeService = async recipeData => {
  const { data } = await privateApi.post('/own-recipes', recipeData, {
    headers: { 'Content-Type': 'multipart/form-data' },
  });

  return data;
};

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

export const getPopularRecipesService = async limit => {
  const { data } = await privateApi.get(`/popular-recipes?limit=${limit}`);

  return data;
};

export const removeOwnRecipesService = async recipeId => {
  const { data } = await privateApi.delete(`/own-recipes/${recipeId}`);

  return data;
};

// export const getCategoriesSe
