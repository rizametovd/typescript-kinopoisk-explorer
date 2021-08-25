export enum MovieActionTypes {
  FETCH_MOVIE = 'FETCH_MOVIE',
  FETCH_MOVIE_DATA_FINISHED = 'FETCH_MOVIE_DATA_FINISHED',
  FETCH_MOVIE_ERROR = 'FETCH_MOVIE_ERROR',
  RESET_MOVIE_STATE = 'RESET_MOVIE_STATE',
}

export interface IFetchMovieAction {
  type: MovieActionTypes.FETCH_MOVIE;
  payload: IMovie;
}

export interface IFetchMovieDataFinishedAction {
  type: MovieActionTypes.FETCH_MOVIE_DATA_FINISHED;
}

export interface IFetchMovieErrorAction {
  type: MovieActionTypes.FETCH_MOVIE_ERROR;
  payload: string;
}

export interface IResetMovieState {
  type: MovieActionTypes.RESET_MOVIE_STATE;
}

export type MovieActions =
  | IFetchMovieAction
  | IFetchMovieErrorAction
  | IResetMovieState
  | IFetchMovieDataFinishedAction;

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
