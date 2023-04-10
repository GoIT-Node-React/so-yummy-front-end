import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import {
  getCategoryListAPI,
  getLimitedRecipesByCategoryAPI,
  getAllRecipesByCategoryAPI,
  getRecipesByQueryAPI,
  getRecipesByIngredientAPI,
} from '../../services/dishesApi';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset(token) {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const getCategoryList = createAsyncThunk(
  'commonRecipes/categoryList',
  async (_, { rejectWithValue, getState }) => {
    const state = getState();
    const persistedAccessToken = state.auth.accessToken;
    if (!persistedAccessToken) {
      return rejectWithValue();
    }
    token.set(persistedAccessToken);
    try {
      const data = await getCategoryListAPI();
      return data;
    } catch (error) {
      return rejectWithValue(error.response.status);
    }
  }
);

export const getMainPage = createAsyncThunk(
  'commonRecipes/mainPage',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    token.set(state.auth.accessToken);
    try {
      const { data } = await axios.get('/recipes/main-page');
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.status);
    }
  }
);

export const getLimitedRecipesByCategory = createAsyncThunk(
  'outerRecipes/limitedRecipes',
  async (params, { rejectWithValue, getState }) => {
    const state = getState();
    const persistedAccessToken = state.auth.accessToken;
    if (!persistedAccessToken) {
      return rejectWithValue();
    }
    token.set(persistedAccessToken);
    try {
      const { category, limit } = params;
      const data = await getLimitedRecipesByCategoryAPI(category, limit);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.status);
    }
  }
);

export const getAllRecipesByCategory = createAsyncThunk(
  'outerRecipes/allRecipes',
  async (category, { rejectWithValue, getState }) => {
    const state = getState();
    const persistedAccessToken = state.auth.accessToken;
    if (!persistedAccessToken) {
      return rejectWithValue();
    }
    token.set(persistedAccessToken);
    try {
      const data = await getAllRecipesByCategoryAPI(category);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.status);
    }
  }
);

export const getRecipesByQuery = createAsyncThunk(
  'outerRecipes/recipesByQuery',
  async ({ query, page, per_page }, { rejectWithValue, getState }) => {
    const state = getState();
    const persistedAccessToken = state.auth.accessToken;
    if (!persistedAccessToken) {
      return rejectWithValue();
    }
    token.set(persistedAccessToken);
    try {
      const data = await getRecipesByQueryAPI(query, page, per_page);
      console.log('recipes by search query', data);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.status);
    }
  }
);

export const getRecipesByIngredient = createAsyncThunk(
  'outerRecipes/recipes',
  async ({ ingredient, page, per_page }, { rejectWithValue, getState }) => {
    const state = getState();
    const persistedAccessToken = state.auth.accessToken;
    if (!persistedAccessToken) {
      return rejectWithValue();
    }
    token.set(persistedAccessToken);
    try {
      const data = await getRecipesByIngredientAPI(ingredient, page, per_page);
      console.log('recipes by search ingredients', data);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.status);
    }
  }
);
