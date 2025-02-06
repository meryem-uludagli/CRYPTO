import {createAsyncThunk} from '@reduxjs/toolkit';
import {BIDS} from '../../service/urls';
import {getRequest} from '../../service/verbs';

const getBidsAction = createAsyncThunk(
  'bids/getBidsAction',
  async (params, {rejectWithValue}) => {
    try {
      const response = await getRequest(BIDS, params);
      console.log('Bids Data from API:', response);
      return response;
    } catch (error) {
      console.error('Thunk Error in getBidsAction:', error.message || error);
      return rejectWithValue(error.message);
    }
  },
);

export default getBidsAction;
