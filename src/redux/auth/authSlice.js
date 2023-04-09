import { createSlice } from '@reduxjs/toolkit';
import { loginUser } from './authOperation';

const initialState = {
  accessToken: '',
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder.addCase(loginUser.fulfilled, (state, { payload }) => {
      console.log('🚀 ~ payload:', payload);
      state.accessToken = payload.accessToken;
    });
  },
});
