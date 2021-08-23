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
      return { ...state, isLoading: true };
    }
    case MovieActionTypes.FETCH_MOVIE_SUCCESS: {
      return { ...state, movie: action.payload, isLoading: false };
    }

    case MovieActionTypes.FETCH_MOVIE_ERROR: {
      return { ...state, movieError: action.payload, isLoading: false };
    }
    default:
      return state;
  }
};
