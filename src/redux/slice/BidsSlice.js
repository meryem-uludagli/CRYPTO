import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchBids = createAsyncThunk('bids/fetchBids', async () => {
  const response = await axios.get('http://localhost:3000/bids');
  return response.data;
});

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
      .addCase(fetchBids.pending, state => {
        state.status = 'loading';
      })
      .addCase(fetchBids.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.bids = action.payload;
      })
      .addCase(fetchBids.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default bidsSlice.reducer;
