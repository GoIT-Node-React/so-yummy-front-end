import { createSlice } from '@reduxjs/toolkit';
import { currentThunk, loginThunk, logoutThunk } from 'redux/auth/auth.thunk';
import { userInitialState } from './user.initial';
import { Status } from 'constants';
import { subscribeThunk } from './user.thunk';

const userSlice = createSlice({
  name: 'user',
  initialState: userInitialState,
  extraReducers: builder => {
    builder
      //Subscription
      .addCase(subscribeThunk.pending, state => {
        state.statuses.subscription = Status.PENDING;
        state.errors.subscription = null;
      })
      .addCase(subscribeThunk.fulfilled, (state, { payload }) => {
        state.statuses.subscription = Status.FULFILLED;
        state.subscription = payload.subscription;
      })
      .addCase(subscribeThunk.rejected, (state, { payload }) => {
        state.statuses.subscription = Status.REJECTED;
        state.errors.subscription = payload?.message;
      })
      // When success login set user data
      .addCase(loginThunk.fulfilled, (state, { payload }) => {
        state.id = payload.user.id;
        state.email = payload.user.email;
        state.subscription = payload.user.subscription;
        state.name = payload.user.name;
        state.avatarURL = payload.user.avatarURL;
      })
      .addCase(currentThunk.fulfilled, (state, { payload }) => {
        state.id = payload.user.id;
        state.email = payload.user.email;
        state.subscription = payload.user.subscription;
        state.name = payload.user.name;
        state.avatarURL = payload.user.avatarURL;
      })
      .addCase(logoutThunk.fulfilled, () => userInitialState)
      .addMatcher(
        action => action.type.endsWith(`/${Status.REJECTED}`),
        (_state, { payload }) => {
          if (payload?.status === 403) {
            return userInitialState;
          }
        }
      );
  },
});

export const userReducer = userSlice.reducer;
