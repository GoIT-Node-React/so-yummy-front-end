import { privateApi } from './api';

export const searchService = async (type, value, page = 1, limit = 12) => {
  const { data } = await privateApi.get(
    `/search?type=${type}&value=${value}&page=${page}&limit=${limit}`
  );

  return data;
};
