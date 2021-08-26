import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { resetMovieStateAction } from '../../store/actionCreators/singleMovieActionCreators';
import { fetchTopMovies } from '../../utils/api';
import { MAIN_PAGE, MOVIE_PAGE, SEARCH_PAGE } from '../../utils/constants';
import MovieCard from '../MovieCard/MovieCard';
import SkeletonCard from '../Skeletons/SkeletonCard/SkeletonCard';
import styles from './styles.module.css';

const MoviesList: React.FC = () => {
  const location = useLocation();
  const { isTopMoviesLoading, topMovies, currentPage } = useTypedSelector(
    (state) => state.topMovies
  );
  const { isSearchResultsLoading, searchResults } = useTypedSelector(
    (state) => state.searchResults
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTopMovies(currentPage));
  }, [currentPage, dispatch]);

  return (
    <div className={styles.container}>
      <ul className={styles.list}>
        {isSearchResultsLoading &&
          location.pathname === `/${SEARCH_PAGE}` &&
          searchResults.map((item) => <SkeletonCard key={item.filmId} />)}

        {!isSearchResultsLoading &&
          location.pathname === `/${SEARCH_PAGE}` &&
          searchResults.map((movie) => (
            <li key={movie.filmId} className={styles.listItem}>
              <Link
                to={`/${MOVIE_PAGE}/${movie.filmId}`}
                className={styles.link}
                onClick={() => dispatch(resetMovieStateAction())}
              >
                <MovieCard {...movie} />
              </Link>
            </li>
          ))}

        {isTopMoviesLoading &&
          location.pathname === MAIN_PAGE &&
          topMovies.map((item) => <SkeletonCard key={item.filmId} />)}

        {!isTopMoviesLoading &&
          location.pathname === MAIN_PAGE &&
          topMovies.map((movie) => (
            <li key={movie.filmId} className={styles.listItem}>
              <Link
                to={`/${MOVIE_PAGE}/${movie.filmId}`}
                className={styles.link}
                onClick={() => dispatch(resetMovieStateAction())}
              >
                <MovieCard {...movie} />
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default MoviesList;
