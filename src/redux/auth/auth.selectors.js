import { Status } from 'constants';
import { selectUser } from 'redux/user/user.selectors';

const selectAuth = state => state.auth;
const selectStatuses = state => selectAuth(state).statuses;
const selectErrors = state => selectAuth(state).errors;

export const selectRegistration = state => ({
  isLoading: selectStatuses(state).registration === Status.PENDING,
  error: selectErrors(state).registration,
});

export const selectLogin = state => ({
  isLoading: selectStatuses(state).login === Status.PENDING,
  error: selectErrors(state).login,
  data:
    selectStatuses(state).login === Status.FULFILLED ? selectUser(state) : null,
});

export const selectCurrent = state => ({
  isLoading: selectStatuses(state).current === Status.PENDING,
  error: selectErrors(state).current,
  data:
    selectStatuses(state).current === Status.FULFILLED
      ? selectUser(state)
      : null,
});

export const selectAccessToken = state => selectAuth(state).accessToken;

// When reload page and request to server for user info
export const selectIsRefreshing = state =>
  selectStatuses(state).current === Status.PENDING;
