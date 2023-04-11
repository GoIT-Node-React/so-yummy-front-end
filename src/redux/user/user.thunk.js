import { createAsyncThunk } from '@reduxjs/toolkit';
import { processingError, successNotification } from 'helpers';

import { subscribeService } from 'services/user.service';
import { updateUserService } from 'services/user.service';

export const subscribeThunk = createAsyncThunk(
  'user/subscribe',
  async (email, { rejectWithValue }) => {
    try {
      const { data } = await subscribeService(email);
      successNotification('Subscription successful');
      return data;
    } catch (error) {
      return rejectWithValue(processingError(error));
    }
  }
);
export const changeInfoThunk = createAsyncThunk(
  'user/changeInfo',
  async (userData, { rejectWithValue }) => {
    try {
      const { data } = await updateUserService(userData);
      successNotification('Updating successful');

      return data;
    } catch (error) {
      return rejectWithValue(processingError(error));
    }
  }
);
