import { configureStore } from '@reduxjs/toolkit';
import { contactsReduser } from './ContactsSlice/contactSlice';
import { authReduser } from './AuthSlice/authSlice';
import { filterSlice } from './filterSlice';

export const store = configureStore({
  reducer: {
    contacts: contactsReduser,
    filter: filterSlice.reducer,
    auth: authReduser,
  },
});
