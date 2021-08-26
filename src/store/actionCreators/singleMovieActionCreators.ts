import {
  IFetchMovieData,
  IFetchMovieDataFinishedAction,
  IFetchMovieErrorAction,
  IFetchMovieSuccessAction,
  IMovie,
  IResetMovieState,
  MovieActionTypes,
} from '../../types/movieTypes';

export const fetchMovieSuccessAction = (movieData: IMovie): IFetchMovieSuccessAction => {
  return {
    type: MovieActionTypes.FETCH_MOVIE_SUCCESS,
    payload: movieData,
  };
};

export const fetchMovieDataAction = (): IFetchMovieData => {
  return {
    type: MovieActionTypes.FETCH_MOVIE_DATA,
  };
};

export const fetchMovieDataFinishedAction = (): IFetchMovieDataFinishedAction => {
  return {
    type: MovieActionTypes.FETCH_MOVIE_DATA_FINISHED,
  };
};

export const fetchMovieErrorAction = (message: string): IFetchMovieErrorAction => {
  return {
    type: MovieActionTypes.FETCH_MOVIE_ERROR,
    payload: message,
  };
};

export const resetMovieStateAction = (): IResetMovieState => {
  return {
    type: MovieActionTypes.RESET_MOVIE_STATE,
  };
};
