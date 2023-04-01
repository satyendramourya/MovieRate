/* eslint-disable no-unused-vars */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import movieApi from '../../common/apis/movieApi';
import { APIKey } from '../../common/apis/MovieApiKey';

// ---------async thunk ------------------
export const fetchAsyncMovies = createAsyncThunk('movies/fetchAsyncMovies', async (term) => {
  const response = await movieApi.get(`?s=${term}&apikey=${APIKey}&page=2`);
  return response.data;
});

export const fetchAsyncShows = createAsyncThunk('movies/fetchAsyncShows', async (term) => {
  const response = await movieApi.get(`?apiKey=${APIKey}&s=${term}&type=series&page=2`);
  return response.data;
});

export const fetchAsyncMoviesOrShowsDetails = createAsyncThunk(
  'movies/fetchAsyncMoviesOrShowsDetails',
  async (id) => {
    const response = await movieApi.get(`?apiKey=${APIKey}&i=${id}&Plot=full`);
    return response.data;
  },
);

// ----------------------redux toolkit----------------------
const initialState = {
  movies: {},
  shows: {},
  selectMovieOrShow: {},
};

const movieSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    removeSelectedMovieOrShow: (state) => {
      state.selectMovieOrShow = {};
    },
  },

  extraReducers: {
    // --------pending-------------
    [fetchAsyncMovies.pending]: () => {
      console.log('Pending');
    },
    [fetchAsyncMovies.fulfilled]: (state, { payload }) => {
      console.log('Fetched Successfully!');
      return { ...state, movies: payload };
    },
    [fetchAsyncMovies.rejected]: () => {
      console.log('Rejected!');
    },
    // -------------series-----------------
    [fetchAsyncShows.fulfilled]: (state, { payload }) => {
      console.log('Fetched Successfully!');
      return { ...state, shows: payload };
    },
    [fetchAsyncMoviesOrShowsDetails.fulfilled]: (state, { payload }) => {
      console.log('Fetched Successfully!');
      return { ...state, selectMovieOrShow: payload };
    },
  },
});

export const { removeSelectedMovieOrShow } = movieSlice.actions;
export const getAllMovies = (state) => state.movies.movies;
export const getAllShows = (state) => state.movies.shows;
export const getSelectedMovieOrShow = (state) => state.movies.selectMovieOrShow;
export default movieSlice.reducer;