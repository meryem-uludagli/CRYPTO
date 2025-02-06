import {createSlice} from '@reduxjs/toolkit';
import getBidsAction from '../action/BidsActions';

const bidsSlice = createSlice({
  name: 'bids',
  initialState: {
    bids: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getBidsAction.pending, state => {
        state.status = 'loading';
      })
      .addCase(getBidsAction.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.bids = action.payload;
      })
      .addCase(getBidsAction.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default bidsSlice.reducer;
