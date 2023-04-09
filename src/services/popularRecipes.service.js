import { privateApi } from './api';

export const getPopularRecipesService = async limit => {
  const { data } = await privateApi.get(`/popular-recipes?limit=${limit}`);
  return data;
};
