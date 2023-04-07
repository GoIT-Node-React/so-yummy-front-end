import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  processingError,
  successNotification,
  warnNotification,
} from 'helpers';
import { token } from 'services/api';
import {
  currentService,
  loginUserService,
  logoutUserService,
  registerUserService,
} from 'services/auth.service';
import { selectAccessToken } from './auth.selectors';
//import { selectRefreshToken, selectTokenSid } from './auth.selectors';
//import { getUserInfoThunk } from 'redux/user/user.thunk';

export const registrationThunk = createAsyncThunk(
  'auth/registration',
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await registerUserService(credentials);

      successNotification(`"${data.user.email}" registered success.`);
      return data;
    } catch (error) {
      return rejectWithValue(processingError(error));
    }
  }
);

export const loginThunk = createAsyncThunk(
  'auth/login',
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await loginUserService(credentials);

      // add token to header in axios request
      token.set(data.accessToken);

      successNotification(`"${data.user.email}" welcome.`);
      return data;
    } catch (error) {
      return rejectWithValue(processingError(error));
    }
  }
);

export const logoutThunk = createAsyncThunk(
  'auth/logout',
  async (_, { rejectWithValue }) => {
    try {
      await logoutUserService();

      warnNotification(`You are logged out.`);
    } catch (error) {
      return rejectWithValue(processingError(error));
    } finally {
      token.unset();
    }
  }
);

export const currentThunk = createAsyncThunk(
  'auth/current',
  async (_, { rejectWithValue, getState }) => {
    const accessToken = selectAccessToken(getState());

    try {
      const { data } = await currentService(accessToken);
      // add token to header in axios request
      token.set(accessToken);

      return data;
    } catch (error) {
      return rejectWithValue(processingError(error));
    }
  }
);
