import {
  IFetchMovieAction,
  IFetchMovieDataFinishedAction,
  IFetchMovieErrorAction,
  IMovie,
  IResetMovieState,
  MovieActionTypes,
} from '../../types/movieTypes';

export const fetchMovieAction = (movieData: IMovie): IFetchMovieAction => {
  return {
    type: MovieActionTypes.FETCH_MOVIE,
    payload: movieData,
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
