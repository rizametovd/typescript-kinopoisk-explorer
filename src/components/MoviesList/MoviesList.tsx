import { useDispatch } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { resetMovieStateAction } from '../../store/actionCreators/singleMovieActionCreators';
import { MOVIE_PAGE, SEARCH_PAGE } from '../../utils/constants';
import MovieCard from '../MovieCard/MovieCard';
import styles from './styles.module.css';

const MoviesList: React.FC = () => {
  const location = useLocation();
  const topMovies = useTypedSelector((state) => state.topMovies.topMovies);
  const searchResultMovies = useTypedSelector((state) => state.searchResults.searchResults);
  const dispatch = useDispatch()

  return (
    <div className={styles.container}>
      <ul className={styles.list}>
        {location.pathname === `/${SEARCH_PAGE}` ? (
          <>
            {searchResultMovies.map((movie) => (
              <li key={movie.filmId} className={styles.listItem}>
                <Link to={`/${MOVIE_PAGE}/${movie.filmId}`} className={styles.link}
                onClick={() => dispatch(resetMovieStateAction())}
                >
                  <MovieCard {...movie} />
                </Link>
              </li>
            ))}
          </>
        ) : (
          <>
            {topMovies.map((movie) => (
              <li key={movie.filmId} className={styles.listItem}>
                <Link to={`/${MOVIE_PAGE}/${movie.filmId}`} className={styles.link}
                onClick={() => dispatch(resetMovieStateAction())}
                >
                  <MovieCard {...movie} />
                </Link>
              </li>
            ))}
          </>
        )}
      </ul>
    </div>
  );
};

export default MoviesList;
