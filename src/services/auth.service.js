import { privateApi, publicApi } from './api';

export const registerUserService = async credentials => {
  const { data } = await publicApi.post('/auth/register', credentials);
  return data;
};

export const loginUserService = async credentials => {
  const { data } = await publicApi.post('/auth/login', credentials);
  return data;
};

export const logoutUserService = async () => {
  return privateApi.post('/auth/logout');
};

export const currentService = async accessToken => {
  const { data } = await privateApi.get('/auth/current', {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  return data;
};

export const refreshTokenService = async refreshToken => {
  const { data } = await privateApi.post('/auth/refresh', { refreshToken });
  return data;
};
