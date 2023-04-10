import { privateApi } from './api';

export const updateUserService = async newData => {
  const { data } = await privateApi.patch('/users', newData, {
    headers: { 'Content-Type': 'multipart/form-data' },
  });

  return data;
};

export const subscribeService = async email => {
  const { data } = await privateApi.patch('users/subscribe', email);

  return data;
};
