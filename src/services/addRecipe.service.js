import { privateApi } from './api';

export const addRecipeService = async recipeData => {
  const { data } = await privateApi.post('/own-recipes', recipeData, {
    headers: { 'Content-Type': 'multipart/form-data' },
  });

  return data;
};
