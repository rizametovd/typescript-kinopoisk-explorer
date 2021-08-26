import { ITopMovieState, TopMovieActionTypes, TopMovieAction } from '../../types/topMoviesTypes';

const initialState: ITopMovieState = {
  topMovies: [],
  isTopMoviesLoading: false,
  currentPage: 1,
  pagesCount: 5,
  fetchTopMoviesError: null,
};

export const topMovieReducer = (state = initialState, action: TopMovieAction): ITopMovieState => {
  switch (action.type) {
    case TopMovieActionTypes.FETCH_TOP_MOVIES_DATA: {
      return { ...state, isTopMoviesLoading: true };
    }
    case TopMovieActionTypes.FETCH_TOP_MOVIES_SUCCESS: {
      return { ...state, topMovies: action.payload };
    }
    case TopMovieActionTypes.FETCH_TOP_MOVIES_FINISHED: {
      return { ...state, isTopMoviesLoading: false };
    }
    case TopMovieActionTypes.SET_TOP_MOVIE_PAGE: {
      return { ...state, currentPage: action.payload };
    }
    case TopMovieActionTypes.FETCH_TOP_MOVIES_ERROR: {
      return { ...state, fetchTopMoviesError: action.payload };
    }

    default:
      return state;
  }
};
