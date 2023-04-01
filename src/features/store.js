import { configureStore } from '@reduxjs/toolkit';
import moviesReducer from './featureSlices/movieSlice';
import showsReducer from './featureSlices/showsSlice';

export const store = configureStore({
  reducer: {
    movies: moviesReducer,
    shows: showsReducer,
  },
});
