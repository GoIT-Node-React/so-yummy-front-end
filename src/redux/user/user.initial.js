import { Status } from 'constants';

export const userInitialState = {
  id: null,
  email: null,
  name: null,
  subscription: null,
  avatarURL: null,
  statuses: {
    subscription: Status.IDLE,
    changeInfo: Status.IDLE,
  },
  errors: {
    subscription: null,
    changeInfo: null,
  },
};
