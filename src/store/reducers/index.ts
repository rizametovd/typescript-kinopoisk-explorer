import { combineReducers } from 'redux';
import { movieReducer } from './movieReducer';
import { searchMovieReducer } from './searchMovieReducer';
import { topMovieReducer } from './topMovieReducer';

export const rootReducer = combineReducers({
  topMovies: topMovieReducer,
  singleMovie: movieReducer,
  searchResults: searchMovieReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
