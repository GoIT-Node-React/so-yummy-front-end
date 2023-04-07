import { errorNotification } from './notification';

export const processingError = (error, isNotificationShow = true) => {
  const message = error?.response?.data?.message || 'Bad request';

  if (isNotificationShow) errorNotification(message);

  return { status: error.response.status, message };
};
