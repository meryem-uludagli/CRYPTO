import {configureStore} from '@reduxjs/toolkit';
import bidsReducer from './slice/BidsSlice';

const store = configureStore({
  reducer: {
    bids: bidsReducer,
  },
});

export default store;
