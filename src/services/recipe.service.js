import { privateApi } from './api';

export const addRecipeService = async recipeData => {
  const { data } = await privateApi.post('/recipes/own-recipes', recipeData, {
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
    `/recipes/own-recipes?page=${page}&limit=${limit}`
  );

  return data;
};

export const getPopularRecipesService = async limit => {
  const { data } = await privateApi.get(
    `/recipes/popular-recipes?limit=${limit}`
  );

  return data;
};

export const removeOwnRecipesService = async recipeId => {
  const { data } = await privateApi.delete(`/recipes/own-recipes/${recipeId}`);

  return data;
};

export const getCategoriesService = async () => {
  const { data } = await privateApi.get(`/recipes/categories`);

  return data;
};

export const getRecipesByCategoryService = async (
  category,
  page = 1,
  limit = 12
) => {
  const { data } = await privateApi.get(
    `/recipes/categories/${category}?page=${page}&limit=${limit}`
  );

  return data;
};

export const getMainPageRecipesService = async () => {
  const { data } = await privateApi.get(`recipes/main-page`);
  return data;
};

export const searchService = async (type, value, page = 1, limit = 12) => {
  const { data } = await privateApi.get(
    `/recipes/search?type=${type}&value=${value}&page=${page}&limit=${limit}`
  );

  return data;
};

export const getFavoritesService = async (page = 1, limit = 4) => {
  const { data } = await privateApi.get(
    `/recipes/favorites?page=${page}&limit=${limit}`
  );

  return data;
};

export const deleteRecipeFromFavoriteService = async recipeId => {
  const { data } = await privateApi.delete(`/recipes/favorites/${recipeId}`);

  return data;
};

export const addRecipeToFavoriteService = async recipeId => {
  const { data } = await privateApi.post(`/recipes/favorites`, { recipeId });

  return data;
};
