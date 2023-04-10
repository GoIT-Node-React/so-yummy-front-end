import { privateApi } from './api';

export const updateUserService = async newData => {
  const { data } = await privateApi.patch('/users', newData, {
    headers: { 'Content-Type': 'multipart/form-data' },
  });

  return data;
};
