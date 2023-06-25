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
  'auth/register',
  (user, { rejectWithValue }) => {
    try {
      return login(user);
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const logoutThunk = createAsyncThunk(
  'auth/register',
  (user, { rejectWithValue }) => {
    try {
      return logOut(user);
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
