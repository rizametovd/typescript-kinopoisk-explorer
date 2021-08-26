import { Route, Switch } from 'react-router-dom';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import {
  ABOUT_PAGE,
  MAIN_PAGE,
  MOVIE_PAGE,
  NO_SEARCH_RESULTS_MESSAGE,
  NO_SEARCH_YET_MESSAGE,
  PAGE_404,
  SEARCH_PAGE,
} from '../../utils/constants';
import AboutPage from '../AboutPage/AboutPage';
import Message from '../Message/Message';
import MoviePage from '../MoviePage/MoviePage';
import MoviesList from '../MoviesList/MoviesList';
import Page404 from '../Page404/Page404';
import Pagination from '../Pagination/Pagination';
import styles from './styles.module.css';

const Main: React.FC = () => {
  const { isTopMoviesLoading, fetchTopMoviesError } = useTypedSelector((state) => state.topMovies);
  const { isSearchResultsLoading, searchResults, searchMovieError, keyword } = useTypedSelector(
    (state) => state.searchResults
  );

  return (
    <main className={styles.main}>
      <Switch>
        <Route exact path={MAIN_PAGE}>
          {!isTopMoviesLoading && fetchTopMoviesError && <Message message={fetchTopMoviesError} />}
          {!fetchTopMoviesError && (
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
          {Boolean(searchResults.length) && (
            <>
              <MoviesList />
              <Pagination />
            </>
          )}

          {!isSearchResultsLoading && searchMovieError && <Message message={searchMovieError} />}

          {!isSearchResultsLoading && !searchMovieError && keyword === '' && (
            <Message message={NO_SEARCH_YET_MESSAGE} />
          )}
          {!isSearchResultsLoading && !!keyword && Boolean(!searchResults.length) && (
            <Message message={NO_SEARCH_RESULTS_MESSAGE} />
          )}
        </Route>

        <Route exact path={`/${ABOUT_PAGE}`}>
          <AboutPage />
        </Route>

        <Route path={PAGE_404} component={Page404} />
      </Switch>
    </main>
  );
};

export default Main;
