import { IMovie } from '../../types/movieTypes';
import {
  ISearchMovieAction,
  ISearchMovieError,
  ISearchMovieFinishedAction,
  // ISearchSuccessAction,
  ISetSearchKeyword,
  ISetSearchMoviePage,
  ISetSearchPagesCount,
  SearchMovieActionTypes,
} from '../../types/searchTypes';

export const searchMovieAction = (movies: IMovie[]): ISearchMovieAction => {
  return {
    type: SearchMovieActionTypes.SEARCH_MOVIE,
    payload: movies,
  };
};

export const searchMovieFinishedAction = (): ISearchMovieFinishedAction => {
  return {
    type: SearchMovieActionTypes.SEARCH_MOVIE_FINISHED,
  }
}

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
