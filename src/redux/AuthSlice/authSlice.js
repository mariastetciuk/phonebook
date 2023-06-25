import { loginThunk, logoutThunk, registeringThunk } from './operations';
import { createSlice } from '@reduxjs/toolkit';

const handleRegisterFulfilled = (state, { payload }) => {
  state.isLoggedIn = true;
  state.token = payload.token;
  state.user = payload.user;
};
const handleLogoutFulfilled = (state, { payload }) => {
  state.isLoggedIn = false;
  state.token = '';
  state.user = { name: null, email: null };
  console.log(payload);
};

const initialeState = {
  user: { name: null, email: null },
  token: '',
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState: initialeState,
  extraReducers: builder => {
    builder
      .addCase(loginThunk.fulfilled, handleRegisterFulfilled)
      .addCase(registeringThunk.fulfilled, handleRegisterFulfilled)
      .addCase(logoutThunk.fulfilled, handleLogoutFulfilled);
  },
});

export const authReduser = authSlice.reducer;
