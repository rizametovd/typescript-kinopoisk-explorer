import { IMovie } from './movieTypes';

export interface ISearchMovieState {
  keyword: string;
  searchResults: IMovie[];
  isSearchResultsLoading: boolean;
  searchResultsCurrentPage: number;
  searchResultsPagesCount: number;
  searchMovieError: string | null;
}

export enum SearchMovieActionTypes {
  SEARCH_MOVIE = 'SEARCH_MOVIE',
  SEARCH_MOVIE_SUCCESS = 'SEARCH_MOVIE_SUCCESS',
  SEARCH_MOVIE_FINISHED = 'SEARCH_MOVIE_FINISHED',
  SEARCH_MOVIE_ERROR = 'SEARCH_MOVIE_ERROR',
  SET_SEARCH_MOVIE_PAGE = 'SET_SEARCH_MOVIE_PAGE',
  SET_SEARCH_KEYWORD = 'SET_SEARCH_KEYWORD',
  SET_SEARCH_PAGES_COUNT = 'SET_SEARCH_PAGES_COUNT',
}

export interface ISearchMovieSuccessAction {
  type: SearchMovieActionTypes.SEARCH_MOVIE_SUCCESS;
  payload: IMovie[];
}

export interface ISearchMovieError {
  type: SearchMovieActionTypes.SEARCH_MOVIE_ERROR;
  payload: string;
}

export interface ISearchMovieAction {
  type: SearchMovieActionTypes.SEARCH_MOVIE;
}

export interface ISearchMovieFinishedAction {
  type: SearchMovieActionTypes.SEARCH_MOVIE_FINISHED;
}

export interface ISetSearchMoviePage {
  type: SearchMovieActionTypes.SET_SEARCH_MOVIE_PAGE;
  payload: number;
}

export interface ISetSearchKeyword {
  type: SearchMovieActionTypes.SET_SEARCH_KEYWORD;
  payload: string;
}

export interface ISetSearchPagesCount {
  type: SearchMovieActionTypes.SET_SEARCH_PAGES_COUNT;
  payload: number;
}

export type SearchMovieActions =
  | ISearchMovieAction
  | ISearchMovieFinishedAction
  | ISetSearchMoviePage
  | ISetSearchKeyword
  | ISetSearchPagesCount
  | ISearchMovieError
  | ISearchMovieSuccessAction;
