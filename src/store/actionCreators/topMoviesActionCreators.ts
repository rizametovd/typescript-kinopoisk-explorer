import { IMovie } from '../../types/movieTypes';
import {
  IFetchTopMoviesAction,
  IFetchTopMoviesSuccessAction,
  ISetTopMoviePage,
  ITopMoviesError,
  TopMovieActionTypes,
} from '../../types/topMoviesTypes';

export const fetchTopMoviesAction = (): IFetchTopMoviesAction => {
  return {
    type: TopMovieActionTypes.FETCH_TOP_MOVIES,
  };
};

export const fetchTopMovieSuccessAction = (moviesList: IMovie[]): IFetchTopMoviesSuccessAction => {
  return {
    type: TopMovieActionTypes.FETCH_TOP_MOVIES_SUCCESS,
    payload: moviesList,
  };
};

export const setTopMoviePageAction = (page: number): ISetTopMoviePage => {
  return {
    type: TopMovieActionTypes.SET_TOP_MOVIE_PAGE,
    payload: page,
  };
};

export const fetchTopMoviesError = (message: string): ITopMoviesError => {
  return {
    type: TopMovieActionTypes.FETCH_TOP_MOVIES_ERROR,
    payload: message,
  };
};
