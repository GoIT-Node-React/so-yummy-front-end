import { createAsyncThunk } from '@reduxjs/toolkit';
import { processingError } from 'helpers';

import {
    getCategoriesListAPI,
    getRecipeByCategoryAPI,
    // getMainPageAPI,
    // getRecipeInfoById,
} from '../../services/recipe.service';



export const getCategoryList = createAsyncThunk(
    'categories/get',
    async (_, { rejectWithValue, }) => {
      try {
        const {data} = await getCategoriesListAPI();
        return data;
      } catch (error) {
        return rejectWithValue(processingError(error));
      }
    }
  );

  export const getRecipesByCategories = createAsyncThunk(
    'outerRecipes/allRecipes',
    async (category, { rejectWithValue,  }) => {
      try {
        const data = await getRecipeByCategoryAPI(category);
        return data;
      } catch (error) {
        return rejectWithValue(processingError(error));
      }
    }
  );