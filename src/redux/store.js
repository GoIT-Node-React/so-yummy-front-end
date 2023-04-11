import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import { persistedAuthReducer } from './auth/auth.slice';
import { userReducer } from './user/user.slice';
import { shoppingListReducer } from './shoppingList/shoppingList.slice';
import { recipesReducer } from './recipes/recipes.slice';

export const store = configureStore({
  reducer: {
    auth: persistedAuthReducer,
    user: userReducer,
    shoppingList: shoppingListReducer,
    recipes: recipesReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistedStore = persistStore(store);
