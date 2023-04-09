import { Status } from 'constants';

export const shoppingListInitial = {
  list: [],
  statuses: {
    get: Status.IDLE,
    add: Status.IDLE,
    remove: Status.IDLE,
  },
  errors: {
    get: null,
    add: null,
    remove: null,
  },
};
