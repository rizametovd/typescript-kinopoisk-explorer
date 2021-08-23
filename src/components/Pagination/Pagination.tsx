import { useDispatch } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { setSearchPageAction } from '../../store/actionCreators/searchMovieActionCreators';
import { setTopMoviePageAction } from '../../store/actionCreators/topMoviesActionCreators';
import { searchMovie } from '../../utils/api';
import { MAIN_PAGE } from '../../utils/constants';
import { handlePagesCounts } from '../../utils/handlePagesCounts';
import styles from './styles.module.css';

const Pagination: React.FC = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const { pagesCount, currentPage } = useTypedSelector((state) => state.topMovies);
  const { searchResultsPagesCount, searchResultsCurrentPage, keyword } = useTypedSelector(
    (state) => state.searchResults
  );

  const searchMoviePaginationPages: number[] = [];
  const topMovieePaginationPages: number[] = [];

  handlePagesCounts(topMovieePaginationPages, pagesCount, currentPage);
  handlePagesCounts(searchMoviePaginationPages, searchResultsPagesCount, searchResultsCurrentPage);

  const onTopMoviesPaginationClick = (p: number) => {
    dispatch(setTopMoviePageAction(p));
  };

  const onSearchPaginationClick = (p: number) => {
    dispatch(setSearchPageAction(p));
    dispatch(searchMovie(keyword, p));
  };

  return (
    <div className={styles.pagination}>
      <ul className={styles.list}>
        {location.pathname === MAIN_PAGE ? (
          <>
            {topMovieePaginationPages.map((page) => (
              <li key={page} className={styles.listItem}>
                <Link
                  to='#'
                  className={`${styles.link} ${currentPage === page ? styles.activeLink : ''}`}
                  onClick={() => onTopMoviesPaginationClick(page)}
                >
                  {page}
                </Link>
              </li>
            ))}
          </>
        ) : (
          <>
            {searchMoviePaginationPages.map((page) => (
              <li key={page} className={styles.listItem}>
                <Link
                  to='#'
                  className={`${styles.link} ${
                    searchResultsCurrentPage === page ? styles.activeLink : ''
                  }`}
                  onClick={() => onSearchPaginationClick(page)}
                >
                  {page}
                </Link>
              </li>
            ))}
          </>
        )}
      </ul>
    </div>
  );
};

export default Pagination;
