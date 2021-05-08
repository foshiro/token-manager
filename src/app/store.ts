import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './etherSlice';

export const store = configureStore({
  reducer: {
    ether: counterReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
