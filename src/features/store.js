import { configureStore } from '@reduxjs/toolkit';
import moviesReducer from './featureSlices/movieSlice';

export const store = configureStore({
  reducer: {
    movies: moviesReducer,
  },
});
