import { createAsyncThunk } from '@reduxjs/toolkit';
import { processingError, successNotification } from 'helpers';
import {
  addIngredientToShoppingListService,
  getShoppingListService,
  removeIngredientFromShoppingListService,
} from 'services/shoppingList.service';

export const getShoppingListThunk = createAsyncThunk(
  'shoppingList/get',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await getShoppingListService();

      return data;
    } catch (error) {
      return rejectWithValue(processingError(error));
    }
  }
);

export const addIngredientToShoppingListThunk = createAsyncThunk(
  'shoppingList/add',
  async (ingredient, { rejectWithValue }) => {
    try {
      const { data } = await addIngredientToShoppingListService(ingredient);

      successNotification(
        `"${data.shoppingItem.ingredient.ttl}" added to your shopping list.`
      );

      return data;
    } catch (error) {
      return rejectWithValue(processingError(error));
    }
  }
);

export const removeIngredientFromShoppingListThunk = createAsyncThunk(
  'shoppingList/remove',
  async (ingredientId, { rejectWithValue }) => {
    try {
      const { data } = await removeIngredientFromShoppingListService(
        ingredientId
      );

      successNotification(
        `"${data.shoppingItem.ingredient.ttl}" removed from your shopping list.`
      );

      return data;
    } catch (error) {
      return rejectWithValue(processingError(error));
    }
  }
);
