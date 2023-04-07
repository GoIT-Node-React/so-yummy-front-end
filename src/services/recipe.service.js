import { privateApi } from './api';

export const getRecipeInfo = async recipeId => {
  const { data } = await privateApi.get(`/recipes/${recipeId}`);

  return data;
};
