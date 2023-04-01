import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import movieApi from '../../common/apis/movieApi';
import { APIKey } from '../../common/apis/MovieApiKey';

// ---------async thunk ------------------
export const fetchAsyncShows = createAsyncThunk('movies/fetchAsyncShows', async (term, pageNo) => {
  const response = await movieApi.get(`?apiKey=${APIKey}&s=${term}&type=series&page=${pageNo}`);
  return response.data;
});

// ----------------------redux toolkit----------------------
const initialState = {
  shows: {},
};

const showsSlice = createSlice({
  name: 'shows',
  initialState,
  reducers: {},

  extraReducers: {
    // --------pending-------------
    [fetchAsyncShows.pending]: () => {
      console.log('Pending');
    },
    [fetchAsyncShows.fulfilled]: (state, { payload }) => {
      console.log('Fetched Successfully!');
      return { ...state, shows: payload };
    },
    [fetchAsyncShows.rejected]: () => {
      console.log('Rejected!');
    },
  },
});

export const getAllShows = (state) => state.shows.shows;
export default showsSlice.reducer;
