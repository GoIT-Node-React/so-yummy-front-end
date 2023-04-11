import { createAsyncThunk } from '@reduxjs/toolkit';
import { processingError } from 'helpers';
import { getCategoriesService } from 'services/recipe.service';

export const getCategoriesThunk = createAsyncThunk(
  'recipes/getCategories',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await getCategoriesService();

      return data;
    } catch (error) {
      return rejectWithValue(processingError(error));
    }
  }
);
