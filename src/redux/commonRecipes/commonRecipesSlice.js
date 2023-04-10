import { createSlice } from '@reduxjs/toolkit';
import {
  getCategoryList,
  getLimitedRecipesByCategory,
  getAllRecipesByCategory,
  getRecipesByQuery,
  getRecipesByIngredient,
} from './commonOperations';

const pending = state => {
  state.isCategoryFetching = true;
};
const rejected = state => {
  state.isCategoryFetching = false;
};

const initialState = {
  isCategoryFetching: false,
  categoryList: [],
  limitedRecipesByCategory: [],
  allRecipesByCategory: [],
  recipesByQuery: {
    results: [],
    totalHits: 0,
  },
  isError: false,
};

export const commmonRecipesSlice = createSlice({
  name: 'commonRecipes',
  initialState,
  extraReducers: builder =>
    builder
      .addCase(getCategoryList.fulfilled, (state, { payload }) => {
        state.categoryList = payload;
      })
      .addCase(getLimitedRecipesByCategory.fulfilled, (state, { payload }) => {
        state.limitedRecipesByCategory = payload;
        state.isCategoryFetching = false;
      })
      .addCase(getAllRecipesByCategory.fulfilled, (state, { payload }) => {
        state.allRecipesByCategory = payload;
        state.isCategoryFetching = false;
      })
      .addCase(getRecipesByQuery.fulfilled, (state, { payload }) => {
        state.recipesByQuery.results = payload.results;
        state.recipesByQuery.totalHits = payload.totalHits;
        state.isCategoryFetching = false;
        state.isError = false;
      })
      .addCase(getRecipesByIngredient.fulfilled, (state, { payload }) => {
        state.isError = false;
        state.recipesByQuery.results = payload.results;
        state.recipesByQuery.totalHits = payload.totalHits;
        state.isCategoryFetching = false;
      })
      .addCase(getLimitedRecipesByCategory.pending, pending)
      .addCase(getAllRecipesByCategory.pending, pending)
      .addCase(getRecipesByQuery.pending, pending)
      .addCase(getRecipesByIngredient.pending, pending)
      .addCase(getLimitedRecipesByCategory.rejected, rejected)
      .addCase(getAllRecipesByCategory.rejected, rejected)
      .addCase(getRecipesByQuery.rejected, state => {
        state.isCategoryFetching = false;
        state.isError = true;
        state.recipesByQuery.results = [];
        state.recipesByQuery.totalHits = 0;
      })
      .addCase(getRecipesByIngredient.rejected, state => {
        state.isCategoryFetching = false;
        state.isError = true;
        state.recipesByQuery.results = [];
        state.recipesByQuery.totalHits = 0;
      }),
});

export default commmonRecipesSlice.reducer;
