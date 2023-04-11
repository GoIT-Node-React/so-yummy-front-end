import { Status } from 'constants';

export const selectUser = state => state?.user;

const selectStatuses = state => selectUser(state)?.statuses;
const selectErrors = state => selectUser(state)?.errors;

export const selectSubscription = state => ({
  isLoading: selectStatuses(state)?.subscription === Status.PENDING,
  error: selectErrors(state)?.subscription,
});

export const selectUserChanging = state => ({
  isLoading: selectStatuses(state)?.changeInfo === Status.PENDING,
  error: selectErrors(state)?.changeInfo,
});
