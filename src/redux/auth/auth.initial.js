import { Status } from 'constants';

export const authInitialState = {
  accessToken: null,
  refreshToken: null,
  isAuthorized: false,
  statuses: {
    login: Status.IDLE,
    registration: Status.IDLE,
    logout: Status.IDLE,
    current: Status.IDLE,
    refreshToken: Status.IDLE,
  },
  errors: {
    login: null,
    registration: null,
    current: null,
    logout: null,
    refreshToken: null,
  },
};
