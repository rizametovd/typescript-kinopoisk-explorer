export enum MovieActionTypes {
  FETCH_MOVIE = 'FETCH_MOVIE',
  FETCH_MOVIE_SUCCESS = 'FETCH_MOVIE_SUCCESS',
  FETCH_MOVIE_ERROR = 'FETCH_MOVIE_ERROR'
}

export interface IFetchMovieAction {
  type: MovieActionTypes.FETCH_MOVIE;
}

export interface IFetchMovieSuccessAction {
  type: MovieActionTypes.FETCH_MOVIE_SUCCESS;
  payload: IMovie;
}

export interface IFetchMovieErrorAction {
  type: MovieActionTypes.FETCH_MOVIE_ERROR;
  payload: string;
}

export type MovieActions = IFetchMovieAction | IFetchMovieSuccessAction | IFetchMovieErrorAction;

export interface IMovie {
  filmId: number;
  nameRu: string;
  nameEn: string;
  webUrl: string;
  posterUrl: string;
  year: number;
  filmLength: string;
  slogan: string;
  description: string;
  type: string;
  countries: { country: string }[];
  genres: { genre: string }[];
  rating: IMovieRating;
  images: IMovieImages;
  [key: string]: any;
}
interface IMovieRating {
  rating: number;
  ratingVoteCount: number;
  ratingImdb: number;
  ratingImdbVoteCount: number;
  [key: string]: any;
}

interface IMovieImages {
  posters: {
    url: string;
    [key: string]: any;
  }[];
}

export interface IMovieState {
  movie: IMovie;
  isLoading: boolean;
  movieError: null | string;
}
