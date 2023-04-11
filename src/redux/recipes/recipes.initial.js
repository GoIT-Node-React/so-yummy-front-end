import { Status } from 'constants';

export const recipesInitialState = {
  categories: [],
  statuses: {
    categories: Status.IDLE,
  },
  errors: {
    categories: null,
  },
};
