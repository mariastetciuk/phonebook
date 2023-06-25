import { createAsyncThunk } from '@reduxjs/toolkit';
import { login, registerUser, logOut } from './fetching';

export const registeringThunk = createAsyncThunk(
  'auth/register',
  (user, { rejectWithValue }) => {
    try {
      return registerUser(user);
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const loginThunk = createAsyncThunk(
  'auth/login',
  (user, { rejectWithValue }) => {
    try {
      return login(user);
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const logoutThunk = createAsyncThunk(
  'auth/logout',
  (_, { rejectWithValue }) => {
    try {
      return logOut();
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);