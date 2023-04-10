import { toast } from 'react-toastify';

export const successNotification = message => toast.success(message);
export const errorNotification = message => toast.error(message);
export const warnNotification = message => toast.warn(message);
