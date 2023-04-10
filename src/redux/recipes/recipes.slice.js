import { createSlice } from '@reduxjs/toolkit';
import {   logoutThunk } from 'redux/auth/auth.thunk';
import {   getCategoryList } from './recipes.thunk';
import { categoryListInitial } from './recipes.initial';
import { Status } from 'constants';

const categoriesSlice = createSlice({
  name: 'categories',
  initialState: categoryListInitial,
  extraReducers: builder => {
    builder
      // When success login set user dat
      .addCase(getCategoryList.fulfilled, (state, { payload }) => {
        console.log(payload)
        state.categories = payload;
        
      })
      .addCase(logoutThunk.fulfilled, () => categoryListInitial)
      .addMatcher(
        action => action.type.endsWith(`/${Status.REJECTED}`),
        (_state, { payload }) => {
          if (payload?.status === 403) {
            return categoryListInitial;
          }
        }
      );
  },
});

export const categoriesReducer = categoriesSlice.reducer;
