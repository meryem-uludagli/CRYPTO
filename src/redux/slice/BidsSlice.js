import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

export const getBidsAction = createAsyncThunk(
  'bids/getBidsAction',
  async () => {
    const response = await axios.get('http://localhost:3000/bids');
    return response.data; // ✅ SADECE JSON DATA DÖNÜYOR!
  },
);

const bidsSlice = createSlice({
  name: 'bids',
  initialState: {bids: [], status: 'idle', error: null},
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getBidsAction.pending, state => {
        state.status = 'loading';
      })
      .addCase(getBidsAction.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.bids = action.payload; // headers'ı kaydetme
      })
      .addCase(getBidsAction.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default bidsSlice.reducer;
