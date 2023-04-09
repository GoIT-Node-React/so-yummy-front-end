import { Status } from 'constants';

export const sliceActionMatcher = (
  sliceName,
  action,
  status,
  matcherFn = null
) => {
  return (
    action.type.startsWith(`${sliceName}/`) &&
    action.type.endsWith(`/${status}`) &&
    (!matcherFn || matcherFn(action))
  );
};

export const isActionPending =
  (sliceName, mathcerFn = null) =>
  action =>
    sliceActionMatcher(sliceName, action, Status.PENDING, mathcerFn);

export const isActionFulfilled =
  (sliceName, mathcerFn = null) =>
  action =>
    sliceActionMatcher(sliceName, action, Status.FULFILLED, mathcerFn);

export const isActionRejected =
  (sliceName, mathcerFn = null) =>
  action =>
    sliceActionMatcher(sliceName, action, Status.REJECTED, mathcerFn);
