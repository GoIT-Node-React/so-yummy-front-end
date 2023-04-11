import { createSlice } from '@reduxjs/toolkit';
import { logoutThunk } from 'redux/auth/auth.thunk';
import { Status } from 'constants';
import { recipesInitialState } from './recipes.initial';
import { getCategoriesThunk } from './recipes.thunk';

const recipesSlice = createSlice({
  name: 'recipes',
  initialState: recipesInitialState,
  extraReducers: builder => {
    builder
      //Subscription
      .addCase(getCategoriesThunk.pending, state => {
        state.statuses.categories = Status.PENDING;
        state.errors.categories = null;
      })
      .addCase(getCategoriesThunk.fulfilled, (state, { payload }) => {
        state.statuses.categories = Status.FULFILLED;
        state.categories = payload.categories;
      })
      .addCase(getCategoriesThunk.rejected, (state, { payload }) => {
        state.statuses.categories = Status.REJECTED;
        state.errors.categories = payload?.message;
      })
      // When success login set user data
      .addCase(logoutThunk.fulfilled, () => recipesInitialState)
      .addMatcher(
        action => action.type.endsWith(`/${Status.REJECTED}`),
        (_state, { payload }) => {
          if (payload?.status === 403) {
            return recipesInitialState;
          }
        }
      );
  },
});

export const recipesReducer = recipesSlice.reducer;
