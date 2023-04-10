import { privateApi } from './api';

export const subscribeService = async email => {
  const { data } = await privateApi.patch('users/subscribe', email);

  return data;
};
