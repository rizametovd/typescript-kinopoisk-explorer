import styles from './styles.module.css';
import SkeletonElement from '../SkeletonElement/SkeletonElement';
import Shimmer from '../Shimmer/Shimmer';

interface ISkeletonCardProps {
  theme?: string;
}

const SkeletonCard: React.FC<ISkeletonCardProps> = ({ theme }) => {
  const themeClass = theme || 'defaultTheme';
  const classes = `${styles.skeletonWrapper} ${styles[themeClass]}`;

  return (
    <div className={classes}>
      <div className={styles.skeletonCard}>
        <SkeletonElement type='card' />
        <div className={styles.container}>
          <SkeletonElement type='cardTitle' />
          <SkeletonElement type='cardSubtitle' />
          <SkeletonElement type='tags' />
        </div>
      </div>

      <Shimmer />
    </div>
  );
};

export default SkeletonCard;
