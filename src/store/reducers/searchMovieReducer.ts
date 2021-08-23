import {
  ISearchMovieState,
  SearchMovieActions,
  SearchMovieActionTypes,
} from '../../types/searchTypes';

const initialState: ISearchMovieState = {
  keyword: '',
  searchResults: [],
  isSearchResultsLoading: false,
  searchResultsCurrentPage: 1,
  searchResultsPagesCount: 0,
  searchMovieError: null,
};

export const searchMovieReducer = (
  state = initialState,
  action: SearchMovieActions
): ISearchMovieState => {
  switch (action.type) {
    case SearchMovieActionTypes.SEARCH_MOVIE: {
      return { ...state, isSearchResultsLoading: true };
    }
    case SearchMovieActionTypes.SEARCH_MOVIE_SUCCESS: {
      return { ...state, isSearchResultsLoading: false, searchResults: action.payload };
    }
    case SearchMovieActionTypes.SET_SEARCH_MOVIE_PAGE: {
      return { ...state, searchResultsCurrentPage: action.payload };
    }
    case SearchMovieActionTypes.SET_SEARCH_KEYWORD: {
      return { ...state, keyword: action.payload };
    }
    case SearchMovieActionTypes.SET_SEARCH_PAGES_COUNT: {
      return { ...state, searchResultsPagesCount: action.payload };
    }
    case SearchMovieActionTypes.SEARCH_MOVIE_ERROR: {
      return { ...state, isSearchResultsLoading: false, searchMovieError: action.payload };
    }

    default:
      return state;
  }
};
