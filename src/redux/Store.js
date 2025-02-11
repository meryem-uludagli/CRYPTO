import {configureStore} from '@reduxjs/toolkit';
import bidsReducer from './slice/BidsSlice';

export const store = configureStore({
  reducer: {
    bids: bidsReducer,
  },
});

export default store;
