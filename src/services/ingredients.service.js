import { privateApi } from './api';

export const getIngredientsByTitleService = async query => {
  const { data } = await privateApi.get(`/ingredients?value=${query}`);
  return data;
};
