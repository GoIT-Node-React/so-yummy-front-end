import { privateApi } from './api';

export const getShoppingListService = async () => {
  const { data } = await privateApi.get(`/shopping-list`);

  return data;
};

export const addIngredientToShoppingListService = async ingredient => {
  const { data } = await privateApi.post(`/shopping-list`, ingredient);

  return data;
};

export const removeIngredientFromShoppingListService = async ingredientId => {
  const { data } = await privateApi.delete(`/shopping-list/${ingredientId}`);

  return data;
};
