import axios from 'axios';
import { addToken } from 'redux/auth/auth.slice';
import { store } from 'redux/store';

export const publicApi = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

export const privateApi = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

export const token = {
  set(tokenValue) {
    privateApi.defaults.headers.Authorization = `Bearer ${tokenValue}`;
  },
  unset() {
    privateApi.defaults.headers.Authorization = null;
  },
};

// Intercept 401 error and try to get a new access token and try to request one more time
privateApi.interceptors.response.use(
  response => response,
  async error => {
    if (error.response.status === 401) {
      // Get refresh token from store
      const currentRefreshToken = store.getState().auth.refreshToken;

      try {
        // Get new access and refresh tokens from server
        const { data } = await publicApi.post('/auth/refresh', {
          refreshToken: currentRefreshToken,
        });

        const { accessToken, refreshToken } = data.data;

        // Save access token and refresh token in store
        store.dispatch(
          addToken({
            accessToken,
            refreshToken,
          })
        );

        // Set new access token in headers
        token.set(accessToken);

        // !Add new access token to request
        error.config.headers.Authorization = `Bearer ${accessToken}`;

        return privateApi(error.config);
      } catch (error) {
        store.dispatch(
          addToken({
            accessToken: null,
            refreshToken: null,
          })
        );
        return Promise.reject(error);
      }
    }
    return Promise.reject(error);
  }
);
