import { token } from 'services/api';

export const checkForAutorizationError = errorCode => {
  if (errorCode === 403) {
    token.unset();
  }
};
