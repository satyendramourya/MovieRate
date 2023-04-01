import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import movieApi from '../../common/apis/movieApi';
import { APIKey } from '../../common/apis/MovieApiKey';

// ---------async thunk ------------------
export const fetchAsyncShows = createAsyncThunk('movies/fetchAsyncShows', async (term) => {
  const response = await movieApi.get(`?apiKey=${APIKey}&s=${term}&type=series&page=2`);
  return response.data;
});

// ----------------------redux toolkit----------------------
const initialState = {
  shows: {},
};

const showsSlice = createSlice({
  name: 'shows',
  initialState,
  reducers: {
    removeSelectedMovieOrShow: (state) => {
      state.selectMovieOrShow = {};
    },
  },

  extraReducers: {
    // --------pending-------------
    [fetchAsyncShows.pending]: () => {
      console.log('Pending');
    },
    [fetchAsyncShows.fulfilled]: (state, { payload }) => {
      console.log('Fetched Successfully!');
      return { ...state, movies: payload };
    },
    [fetchAsyncShows.rejected]: () => {
      console.log('Rejected!');
    },
  },
});

export const getAllShows = (state) => state.movies.shows;
export default showsSlice.reducer;
