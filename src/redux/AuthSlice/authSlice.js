import { loginThunk, logoutThunk, registeringThunk } from './operations';
import { createSlice } from '@reduxjs/toolkit';

// const handleRegisterFulfilled = (state, { payload }) => {
//   state.isLoggedIn = true;
//   state.token = payload.token;
//   state.user = payload.user;
// };
// const handleLoginFulfilled = (state, { payload }) => {
//   state.isLoggedIn = true;
//   state.token = payload.token;
//   state.user = payload.user;
// };

const initialeState = {
  user: { name: null, email: null },
  token: '',
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState: initialeState,
  extraReducers: {
    [registeringThunk.fulfilled](state, { payload }) {
      state.isLoggedIn = true;
      state.token = payload.token;
      state.user = payload.user;
    },
    [loginThunk.fulfilled](state, { payload }) {
      state.isLoggedIn = true;
      state.token = payload.token;
      state.user = payload.user;
      console.log(payload);
    },
    [logoutThunk.fulfilled](state, { payload }) {
      state.isLoggedIn = false;
      state.token = '';
      state.user = { name: null, email: null };
      console.log(payload);
    },
  },
  // extraReducers: builder => {
  //   builder
  //     .addCase(loginThunk.fulfilled, handleLoginFulfilled)
  //     .addCase(registeringThunk.fulfilled, handleRegisterFulfilled);
  // },
});

export const authReduser = authSlice.reducer;
