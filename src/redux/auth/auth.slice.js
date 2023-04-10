import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { Status } from 'constants';
import { authInitialState } from './auth.initial';
import { loginThunk, logoutThunk, registrationThunk } from './auth.thunk';
import { currentThunk } from 'redux/auth/auth.thunk';

const authSlice = createSlice({
  name: 'auth',
  initialState: authInitialState,
  reducers: {
    addToken: (state, { payload }) => {
      state.accessToken = payload.accessToken;
      state.refreshToken = payload.refreshToken;
      state.isAuthorized = true;
    },
  },
  extraReducers: builder => {
    builder
      // Registration
      .addCase(registrationThunk.pending, state => {
        state.statuses.registration = Status.PENDING;
        state.errors.registration = null;
      })
      .addCase(registrationThunk.fulfilled, state => {
        state.statuses.registration = Status.FULFILLED;
      })
      .addCase(registrationThunk.rejected, (state, { payload }) => {
        state.statuses.registration = Status.REJECTED;
        state.errors.registration = payload?.message;
      })

      // Login
      .addCase(loginThunk.pending, state => {
        state.statuses.login = Status.PENDING;
        state.errors.login = null;
      })
      .addCase(loginThunk.fulfilled, (state, { payload }) => {
        state.accessToken = payload.accessToken;
        state.refreshToken = payload.refreshToken;
        state.isAuthorized = true;
        state.statuses.login = Status.FULFILLED;
      })
      .addCase(loginThunk.rejected, (state, { payload }) => {
        state.statuses.login = Status.REJECTED;
        state.errors.login = payload?.message;
      })
      // Logout
      .addCase(logoutThunk.pending, state => {
        state.statuses.logout = Status.PENDING;
        state.errors.logout = null;
      })
      .addCase(logoutThunk.fulfilled, () => authInitialState)
      //.addCase(logoutThunk.rejected, () => authInitialState)
      // Current
      .addCase(currentThunk.pending, state => {
        state.statuses.current = Status.PENDING;
        state.errors.current = null;
      })
      .addCase(currentThunk.fulfilled, state => {
        state.statuses.current = Status.FULFILLED;
        state.isAuthorized = true;
      })
      .addCase(currentThunk.rejected, () => authInitialState)
      .addMatcher(
        action => action.type.endsWith(`/${Status.REJECTED}`),
        (_state, { payload }) => {
          if (payload?.status === 403) {
            return authInitialState;
          }
        }
      );
  },
});

const persistConfig = {
  key: 'auth',
  storage,
  whitelist: ['refreshToken', 'accessToken'],
};

export const { addToken } = authSlice.actions;
export const authReducer = authSlice.reducer;
export const persistedAuthReducer = persistReducer(persistConfig, authReducer);
