import styles from './styles.module.css';
import { IMovie } from '../../types/movieTypes';

const MovieCard: React.FC<IMovie> = ({ nameRu, rating, genres, posterUrl }) => {
  return (
    <div className={styles.card}>
      <img src={posterUrl} alt='Обложка' className={styles.image} />
      <div className={styles.content}>
        <h2 className={styles.title}>{nameRu}</h2>
        <p className={styles.rating}>Рейтинг: {rating}/10</p>
        {genres.map(({ genre }, idx) => {
          if (genres.length === idx + 1) {
            return (
              <span key={idx} className={styles.genre}>
                {genre}
              </span>
            );
          }
          return (
            <span key={idx} className={styles.genre}>
              {genre},{' '}
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default MovieCard;
