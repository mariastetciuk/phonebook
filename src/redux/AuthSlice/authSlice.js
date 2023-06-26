import {
  currentUserThunk,
  loginThunk,
  logoutThunk,
  registeringThunk,
} from './operations';
import { createSlice } from '@reduxjs/toolkit';

const handleRegisterFulfilled = (state, { payload }) => {
  state.isLoggedIn = true;
  state.token = payload.token;
  state.user = payload.user;
};

const handleLogoutFulfilled = state => {
  state.isLoggedIn = false;
  state.token = null;
  state.user = { name: null, email: null };
};

const handleCurrentUserFulfilled = (state, { payload }) => {
  console.log(payload);
  state.user = payload;
  state.isLoggedIn = true;
};

const initialeState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState: initialeState,
  extraReducers: builder => {
    builder
      .addCase(loginThunk.fulfilled, handleRegisterFulfilled)
      .addCase(registeringThunk.fulfilled, handleRegisterFulfilled)
      .addCase(logoutThunk.fulfilled, handleLogoutFulfilled)
      .addCase(currentUserThunk.fulfilled, handleCurrentUserFulfilled);
  },
});

export const authReduser = authSlice.reducer;
