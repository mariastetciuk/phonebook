import { configureStore } from '@reduxjs/toolkit';
import { contactsReduser } from './ContactsSlice/contactSlice';
import { authReduser } from './AuthSlice/authSlice';
import { filterSlice } from './filterSlice';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

const persistedReducer = persistReducer(persistConfig, authReduser);

export const store = configureStore({
  reducer: {
    contacts: contactsReduser,
    filter: filterSlice.reducer,
    auth: persistedReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
