import { configureStore } from '@reduxjs/toolkit';
import moviesReducer from './featureSlices/movieSlice';
import showsReducer from './featureSlices/showsSlice';
import pagesReducer from './featureSlices/pageSlice';

export const store = configureStore({
  reducer: {
    movies: moviesReducer,
    shows: showsReducer,
    pages: pagesReducer,
  },
});
