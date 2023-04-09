import { createSlice } from '@reduxjs/toolkit';
import { logoutThunk } from 'redux/auth/auth.thunk';
import { Status } from 'constants';
import { shoppingListInitial } from './shoppingList.initial';
import {
  addIngredientToShoppingListThunk,
  getShoppingListThunk,
  removeIngredientFromShoppingListThunk,
} from './shoppingList.thunk';

const shoppingListSlice = createSlice({
  name: 'shoppingList',
  initialState: shoppingListInitial,
  extraReducers: builder => {
    builder
      // Get all ingredient from shopping list
      .addCase(getShoppingListThunk.pending, state => {
        state.statuses.get = Status.PENDING;
        state.errors.get = null;
      })
      .addCase(getShoppingListThunk.fulfilled, (state, { payload }) => {
        state.statuses.get = Status.FULFILLED;
        state.list = payload.shoppingList;
      })
      .addCase(getShoppingListThunk.rejected, (state, { payload }) => {
        state.statuses.get = Status.REJECTED;
        state.errors.get = payload?.message;
      })
      // Add ingredient to shopping list
      .addCase(addIngredientToShoppingListThunk.pending, state => {
        state.statuses.add = Status.PENDING;
        state.errors.add = null;
      })
      .addCase(
        addIngredientToShoppingListThunk.fulfilled,
        (state, { payload }) => {
          state.statuses.add = Status.FULFILLED;
          state.list.unshift(payload.shoppingItem);
        }
      )
      .addCase(
        addIngredientToShoppingListThunk.rejected,
        (state, { payload }) => {
          state.statuses.add = Status.REJECTED;
          state.errors.add = payload?.message;
        }
      )
      // Remove ingredient from shopping list
      .addCase(removeIngredientFromShoppingListThunk.pending, state => {
        state.statuses.remove = Status.PENDING;
        state.errors.remove = null;
      })
      .addCase(
        removeIngredientFromShoppingListThunk.fulfilled,
        (state, { payload }) => {
          state.statuses.remove = Status.FULFILLED;
          // remove element from list
          state.list = state.list.filter(
            ingredient => ingredient._id !== payload.shoppingItem._id
          );
        }
      )
      .addCase(
        removeIngredientFromShoppingListThunk.rejected,
        (state, { payload }) => {
          state.statuses.remove = Status.REJECTED;
          state.errors.remove = payload?.message;
        }
      )
      // Clearing data
      .addCase(logoutThunk.fulfilled, () => shoppingListInitial)
      .addMatcher(
        action => action.type.endsWith(`/${Status.REJECTED}`),
        (_state, { payload }) => {
          if (payload?.status === 403) {
            return shoppingListInitial;
          }
        }
      );
  },
});

export const shoppingListReducer = shoppingListSlice.reducer;
