import styles from './styles.module.css';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { fetchMovie } from '../../utils/api';
import Preloader from '../Preloader/Preloader';
import Genres from '../Genres/Genres';
import Message from '../Message/Message';

interface IMovieProps {
  filmId: string;
}

const MoviePage: React.FC = () => {
  const { filmId } = useParams<IMovieProps>();
  const dispatch = useDispatch();
  const { isLoading, movie, movieError } = useTypedSelector((state) => state.singleMovie);
  const { nameRu, nameEn, description, posterUrl, year, genres, filmLength } = movie;

  useEffect(() => {
    dispatch(fetchMovie(filmId));
  }, [filmId]);

  return (
    <section className={styles.section}>
      <div
        className={styles.backgroundImage}
        style={{ backgroundImage: `url(${posterUrl})` }}
      ></div>

      {isLoading && <Preloader />}
      {!isLoading && !!movieError && <Message message={movieError} />}

      {!isLoading && !movieError && (
        <>
          <img src={posterUrl} alt='Постер' className={styles.poster} />
          <div>
            <h1 className={styles.title}>{nameRu}</h1>
            <h2 className={styles.subtitle}>
              {nameEn && `${nameEn}, `}
              <span>{year}</span>
            </h2>
            {filmLength && <p className={styles.subtitle}>Продолжительность: {filmLength} ч</p>}

            <ul className={styles.genresList}>
              {genres.map(({ genre }, idx) => (
                <Genres genre={genre} key={idx} />
              ))}
            </ul>

            <h3 className={styles.heading}>Описание</h3>
            <p className={styles.text}>{description}</p>
          </div>
        </>
      )}
    </section>
  );
};

export default MoviePage;
