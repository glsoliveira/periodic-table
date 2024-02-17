// src/redux/store.ts

import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import textReducer from './textSlice';
import elementsReducer from './elementsSlice';

export const setupStore = () => configureStore({
  reducer: {
    text: textReducer,
    elements: elementsReducer,
  },
});

export const store = setupStore();

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
