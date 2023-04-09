import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://so-yummy-s9sp.onrender.com/api';

export const loginUser = createAsyncThunk(
  'auth/login',
  async (credentials, ThunkAPI) => {
    try {
      const { data } = await axios.post('/auth/login', credentials);
      console.log('🚀 ~ data:', data.data);
      return data.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const setupInterceptors = s => {
  axios.interceptors.request.use(
    config => {
      const token = s.getState().auth.accessToken;
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    error => Promise.reject(error)
  );
};
