import { IMovie } from '../../types/movieTypes';
import {
  IFetchTopMoviesDataAction,
  IFetchTopMoviesFinishedAction,
  IFetchTopMoviesSuccessAction,
  ISetTopMoviePage,
  ITopMoviesError,
  TopMovieActionTypes,
} from '../../types/topMoviesTypes';

export const fetchTopMoviesDataAction = (): IFetchTopMoviesDataAction => {
  return {
    type: TopMovieActionTypes.FETCH_TOP_MOVIES_DATA,
  };
};

export const fetchTopMoviesSuccessAction = (moviesList: IMovie[]): IFetchTopMoviesSuccessAction => {
  return {
    type: TopMovieActionTypes.FETCH_TOP_MOVIES_SUCCESS,
    payload: moviesList,
  };
};

export const fetchTopMoviesFinishedAction = (): IFetchTopMoviesFinishedAction => {
  return {
    type: TopMovieActionTypes.FETCH_TOP_MOVIES_FINISHED,
  };
};

export const setTopMoviePageAction = (page: number): ISetTopMoviePage => {
  return {
    type: TopMovieActionTypes.SET_TOP_MOVIE_PAGE,
    payload: page,
  };
};

export const fetchTopMoviesErrorAction = (message: string): ITopMoviesError => {
  return {
    type: TopMovieActionTypes.FETCH_TOP_MOVIES_ERROR,
    payload: message,
  };
};
