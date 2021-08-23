import { Dispatch } from 'redux';
import {
  searchMovieAction,
  searchMovieError,
  searchMovieSuccessAction,
  setSearchKeywordAction,
  setSearchPagesCount,
} from '../store/actionCreators/searchMovieActionCreators';
import {
  fetchMovieAction,
  fetchMovieError,
  fetchMovieSuccessAction,
} from '../store/actionCreators/singleMovieActionCreators';
import {
  fetchTopMoviesAction,
  fetchTopMoviesError,
  fetchTopMovieSuccessAction,
} from '../store/actionCreators/topMoviesActionCreators';
import { MovieActions } from '../types/movieTypes';
import { SearchMovieActions } from '../types/searchTypes';
import { TopMovieAction } from '../types/topMoviesTypes';
import { BASE_FETCH_URL, BASE_TOP_MOVIES_URL, FETCH_ERROR_MESSAGE } from './constants';

const options = {
  headers: { 'X-API-KEY': '6f236faa-05c4-47ab-90cb-cb534e2732e8' },
};

const checkResponse = (response: Response) => {
  return response.ok ? response.json() : Promise.reject(`Ошибка с фронта`);
};

const fetchTopMovies = (page = 1) => {
  return async (dispatch: Dispatch<TopMovieAction>) => {
    try {
      dispatch(fetchTopMoviesAction());
      const response = await fetch(`${BASE_TOP_MOVIES_URL}${page}`, options);
      const topMoviesData = await checkResponse(response);

      setTimeout(() => {
        dispatch(fetchTopMovieSuccessAction(topMoviesData.films));
      }, 400);
    } catch (err) {
      console.log(err);
      setTimeout(() => dispatch(fetchTopMoviesError(FETCH_ERROR_MESSAGE)), 400);
    }
  };
};

const fetchMovie = (filmId: string) => {
  return async (dispatch: Dispatch<MovieActions>) => {
    try {
      dispatch(fetchMovieAction());
      const response = await fetch(`${BASE_FETCH_URL}/v2.1/films/${filmId}`, options);
      const movieData = await checkResponse(response);

      setTimeout(() => dispatch(fetchMovieSuccessAction(movieData.data)), 400);
    } catch (err) {
      console.log(err);
      setTimeout(() => dispatch(fetchMovieError(FETCH_ERROR_MESSAGE)), 400);
    }
  };
};

const searchMovie = (keyword?: string, page = 1) => {
  return async (dispatch: Dispatch<SearchMovieActions>) => {
    try {
      dispatch(searchMovieAction());
      const response = await fetch(
        `${BASE_FETCH_URL}/v2.1/films/search-by-keyword?keyword=${keyword}&page=${page}`,
        options
      );
      const searchResultsData = await checkResponse(response);

      setTimeout(() => {
        dispatch(setSearchPagesCount(searchResultsData.pagesCount));
        dispatch(searchMovieSuccessAction(searchResultsData.films));
        dispatch(setSearchKeywordAction(searchResultsData.keyword));
      }, 400);
    } catch (err) {
      setTimeout(() => dispatch(searchMovieError(FETCH_ERROR_MESSAGE)), 400);
      console.log(err);
    }
  };
};

export { fetchTopMovies, fetchMovie, searchMovie };
