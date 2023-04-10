import { Status } from 'constants';

const selectData = state => state.shoppingList;
const selectStatuses = state => selectData(state).statuses;
const selectErrors = state => selectData(state).errors;

export const selectShoppingList = state => ({
  isLoading: selectStatuses(state).get === Status.PENDING,
  error: selectErrors(state).get,
  data: selectData(state).list,
});

export const selectAddIngredientToShoppingList = state => ({
  isLoading: selectStatuses(state).add === Status.PENDING,
  error: selectErrors(state).add,
  data: selectData(state).list,
});

export const selectRemoveIngredientFromShoppingList = state => ({
  isLoading: selectStatuses(state).remove === Status.PENDING,
  error: selectErrors(state).remove,
  data: selectData(state).list,
});
