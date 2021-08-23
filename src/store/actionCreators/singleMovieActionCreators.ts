import {
  IFetchMovieAction,
  IFetchMovieErrorAction,
  IFetchMovieSuccessAction,
  IMovie,
  MovieActionTypes,
} from '../../types/movieTypes';

export const fetchMovieAction = (): IFetchMovieAction => {
  return {
    type: MovieActionTypes.FETCH_MOVIE,
  };
};

export const fetchMovieSuccessAction = (movieData: IMovie): IFetchMovieSuccessAction => {
  return {
    type: MovieActionTypes.FETCH_MOVIE_SUCCESS,
    payload: movieData,
  };
};

export const fetchMovieError = (message: string): IFetchMovieErrorAction => {
  return {
    type: MovieActionTypes.FETCH_MOVIE_ERROR,
    payload: message,
  };
};
