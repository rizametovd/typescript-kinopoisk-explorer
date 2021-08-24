import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { fetchTopMovies } from '../../utils/api';
import {
  ABOUT_PAGE,
  MAIN_PAGE,
  MOVIE_PAGE,
  NO_SEARCH_RESULTS_MESSAGE,
  NO_SEARCH_YET_MESSAGE,
  SEARCH_PAGE,
} from '../../utils/constants';
import AboutPage from '../AboutPage/AboutPage';
import Message from '../Message/Message';
import MoviePage from '../MoviePage/MoviePage';
import MoviesList from '../MoviesList/MoviesList';
import Pagination from '../Pagination/Pagination';
import Preloader from '../Preloader/Preloader';
import styles from './styles.module.css';

const Main: React.FC = () => {
  const dispatch = useDispatch();
  const { isTopMoviesLoading, currentPage, fetchTopMoviesError } = useTypedSelector(
    (state) => state.topMovies
  );
  const { isSearchResultsLoading, searchResults, searchMovieError, keyword } = useTypedSelector(
    (state) => state.searchResults
  );

  useEffect(() => {
    dispatch(fetchTopMovies(currentPage));
  }, [currentPage]);

  return (
    <main className={styles.main}>
      <Switch>
        <Route exact path={MAIN_PAGE}>
          {isTopMoviesLoading && <Preloader />}
          {!isTopMoviesLoading && fetchTopMoviesError && <Message message={fetchTopMoviesError} />}
          {!isTopMoviesLoading && !fetchTopMoviesError && (
            <>
              <h1 className={styles.title}>Топ популярных фильмов</h1>
              <MoviesList />
              <Pagination />
            </>
          )}
        </Route>

        <Route exact path={`/${MOVIE_PAGE}/:filmId`}>
          <MoviePage />
        </Route>

        <Route exact path={`/${SEARCH_PAGE}`}>
          {isSearchResultsLoading && <Preloader />}
          {!isSearchResultsLoading && searchMovieError && <Message message={searchMovieError} />}
          {!isSearchResultsLoading && !searchMovieError && keyword === '' && (
            <Message message={NO_SEARCH_YET_MESSAGE} />
          )}
          {!isSearchResultsLoading && !!keyword && Boolean(!searchResults.length) && (
            <Message message={NO_SEARCH_RESULTS_MESSAGE} />
          )}
          {!isSearchResultsLoading && !!keyword && Boolean(searchResults.length) && (
            <>
              <MoviesList />
              <Pagination />
            </>
          )}
        </Route>

        <Route exact path={`/${ABOUT_PAGE}`}>
          <AboutPage />
        </Route>
      </Switch>
    </main>
  );
};

export default Main;
