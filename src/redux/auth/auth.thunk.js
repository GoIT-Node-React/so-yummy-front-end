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
import { getShoppingListThunk } from 'redux/shoppingList/shoppingList.thunk';

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
  async (credentials, { rejectWithValue, dispatch }) => {
    try {
      const { data } = await loginUserService(credentials);

      // add token to header in axios request
      token.set(data.accessToken);

      dispatch(getShoppingListThunk());

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
  async (_, { rejectWithValue, getState, dispatch }) => {
    const accessToken = selectAccessToken(getState());

    try {
      const { data } = await currentService(accessToken);
      // add token to header in axios request
      token.set(accessToken);

      dispatch(getShoppingListThunk());

      return data;
    } catch (error) {
      return rejectWithValue(processingError(error));
    }
  }
);
