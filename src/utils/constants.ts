export const BASE_TOP_MOVIES_URL =
  'https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_100_POPULAR_FILMS&page=';

export const BASE_FETCH_URL = 'https://kinopoiskapiunofficial.tech/api';
export const ABOUT_PAGE = 'about-page';
export const MAIN_PAGE = '/';
export const MOVIE_PAGE = 'movie';
export const SEARCH_PAGE = 'search';
export const PAGE_404 = '*';
export const GH_PAGES_PATH = '/typescript-kinopoisk-explorer'; // При деплое на GH нужно поставить слеш на конце

export const MAX_PAGES_COUNT = 20;
// Ограничения АПИ: более 20 страниц получить нельзя,
// хотя в возвращаемом объекте в свойстве pagesCount
// может быть более 20 старниц

export const FETCH_ERROR_MESSAGE = 'На сервере произошла ошибка';
export const NO_SEARCH_RESULTS_MESSAGE = 'Ничего не найдено';
export const NO_SEARCH_YET_MESSAGE = 'Вы еще ничего не искали';
