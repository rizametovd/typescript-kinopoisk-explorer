import { IMovie } from './movieTypes';

export interface ITopMovieState {
  topMovies: IMovie[];
  isTopMoviesLoading: boolean;
  currentPage: number;
  pagesCount: number;
  fetchTopMoviesError: null | string;
}

export interface ITopMoviesError {
  type: TopMovieActionTypes.FETCH_TOP_MOVIES_ERROR;
  payload: string;
}

export enum TopMovieActionTypes {
  FETCH_TOP_MOVIES_DATA = 'FETCH_TOP_MOVIES_DATA',
  FETCH_TOP_MOVIES_SUCCESS = 'FETCH_TOP_MOVIES_SUCCESS',
  FETCH_TOP_MOVIES_FINISHED = 'FETCH_TOP_MOVIES_FINISHED',
  FETCH_TOP_MOVIES_ERROR = 'FETCH_TOP_MOVIES_ERROR',
  SET_TOP_MOVIE_PAGE = 'SET_TOP_MOVIE_PAGE',
}

export interface IFetchTopMoviesDataAction {
  type: TopMovieActionTypes.FETCH_TOP_MOVIES_DATA;
}

export interface IFetchTopMoviesSuccessAction {
  type: TopMovieActionTypes.FETCH_TOP_MOVIES_SUCCESS;
  payload: IMovie[];
}

export interface IFetchTopMoviesFinishedAction {
  type: TopMovieActionTypes.FETCH_TOP_MOVIES_FINISHED;
}

export interface ISetTopMoviePage {
  type: TopMovieActionTypes.SET_TOP_MOVIE_PAGE;
  payload: number;
}

export type TopMovieAction =
  | IFetchTopMoviesDataAction
  | IFetchTopMoviesSuccessAction
  | ISetTopMoviePage
  | ITopMoviesError
  | IFetchTopMoviesFinishedAction;
