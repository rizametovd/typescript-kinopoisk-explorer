import { IMovie } from '../../types/movieTypes';
import {
  ISearchMovieAction,
  ISearchMovieError,
  ISearchMovieFinishedAction,
  ISearchMovieSuccessAction,
  ISetSearchKeyword,
  ISetSearchMoviePage,
  ISetSearchPagesCount,
  SearchMovieActionTypes,
} from '../../types/searchTypes';

export const searchMovieAction = (): ISearchMovieAction => {
  return {
    type: SearchMovieActionTypes.SEARCH_MOVIE,
  };
};

export const searchMovieSuccessAction = (movies: IMovie[]): ISearchMovieSuccessAction => {
  return {
    type: SearchMovieActionTypes.SEARCH_MOVIE_SUCCESS,
    payload: movies,
  };
};

export const searchMovieFinishedAction = (): ISearchMovieFinishedAction => {
  return {
    type: SearchMovieActionTypes.SEARCH_MOVIE_FINISHED,
  };
};

export const setSearchPagesCountAction = (page: number): ISetSearchPagesCount => {
  return {
    type: SearchMovieActionTypes.SET_SEARCH_PAGES_COUNT,
    payload: page,
  };
};

export const setSearchPageAction = (page: number): ISetSearchMoviePage => {
  return {
    type: SearchMovieActionTypes.SET_SEARCH_MOVIE_PAGE,
    payload: page,
  };
};

export const setSearchKeywordAction = (keyword: string): ISetSearchKeyword => {
  return {
    type: SearchMovieActionTypes.SET_SEARCH_KEYWORD,
    payload: keyword,
  };
};

export const searchMovieErrorAction = (message: string): ISearchMovieError => {
  return {
    type: SearchMovieActionTypes.SEARCH_MOVIE_ERROR,
    payload: message,
  };
};
