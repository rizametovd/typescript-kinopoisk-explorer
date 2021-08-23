import styles from './styles.module.css';

interface IGenresProps {
  genre: string;
}

const Genres: React.FC<IGenresProps> = ({ genre }) => {
  return (
    <li className={styles.genresListItem}>{genre.charAt(0).toUpperCase() + genre.slice(1)}</li>
  );
};

export default Genres;
