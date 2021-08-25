import { IMovieState, MovieActions, MovieActionTypes } from '../../types/movieTypes';

const initialState: IMovieState = {
  movie: {
    filmId: 0,
    nameRu: '',
    nameEn: '',
    webUrl: '',
    posterUrl: '',
    year: 0,
    filmLength: '',
    slogan: '',
    description: '',
    type: '',
    countries: [],
    genres: [],
    rating: {
      rating: 0,
      ratingVoteCount: 0,
      ratingImdb: 0,
      ratingImdbVoteCount: 0,
    },
    images: {
      posters: [],
    },
  },
  isLoading: false,
  movieError: null,
};

export const movieReducer = (state = initialState, action: MovieActions): IMovieState => {
  switch (action.type) {
    case MovieActionTypes.FETCH_MOVIE: {
      return { ...state, movie: action.payload, isLoading: true };
    }
    case MovieActionTypes.FETCH_MOVIE_DATA_FINISHED: {
      return { ...state, isLoading: false };
    }
    case MovieActionTypes.FETCH_MOVIE_ERROR: {
      return { ...state, movieError: action.payload };
    }
    case MovieActionTypes.RESET_MOVIE_STATE: {
      return initialState;
    }
    default:
      return state;
  }
};
