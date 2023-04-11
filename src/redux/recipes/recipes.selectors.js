import { Status } from 'constants';

export const selectRecipes = state => state.recipes;

const selectStatuses = state => selectRecipes(state).statuses;
const selectErrors = state => selectRecipes(state).errors;

export const selectCategories = state => ({
  isLoading: selectStatuses(state).categories === Status.PENDING,
  error: selectErrors(state).categories,
  data: selectRecipes(state).categories,
});
