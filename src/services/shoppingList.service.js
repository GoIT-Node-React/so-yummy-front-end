import { privateApi } from './api';

export const getShoppingListService = async () => {
  const { data } = await privateApi.get(`/shopping-lists`);

  return data;
};

export const addIngredientToShoppingListService = async ingredient => {
  const { data } = await privateApi.post(`/shopping-lists`, ingredient);

  return data;
};

export const removeIngredientFromShoppingListService = async ingredientId => {
  const { data } = await privateApi.delete(`/shopping-lists/${ingredientId}`);

  return data;
};
