import { createSlice } from '@reduxjs/toolkit';
import { currentThunk, loginThunk, logoutThunk } from 'redux/auth/auth.thunk';
import { userInitialState } from './user.initial';
// import { addUserBalanceThunk, getUserInfoThunk } from './user.thunk';
import { Status } from 'constants';
//import { isActionFulfilled, isActionPending, isActionRejected } from 'helpers';

const userSlice = createSlice({
  name: 'user',
  initialState: userInitialState,
  extraReducers: builder => {
    builder
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
      /* .addCase(getUserInfoThunk.fulfilled, (state, { payload }) => {
        state.balance = payload.balance;
        state.email = payload.email;
      })*/

      .addCase(logoutThunk.fulfilled, () => userInitialState);
    //.addCase(logoutThunk.rejected, () => userInitialState);
    // TODO: додати очищення після помилки 403
    /*.addMatcher(isActionPending(userSlice.name), state => {
        state.status = Status.PENDING;
        state.error = null;
      })
      .addMatcher(isActionFulfilled(userSlice.name), state => {
        state.status = Status.FULFILLED;
      })
      .addMatcher(isActionRejected(userSlice.name), (state, { payload }) => {
        state.status = Status.REJECTED;
        state.error = payload.message;
      });*/
  },
});

export const userReducer = userSlice.reducer;
