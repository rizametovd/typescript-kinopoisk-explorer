import Shimmer from '../Shimmer/Shimmer';
import SkeletonElement from '../SkeletonElement/SkeletonElement';
import styles from './styles.module.css';

const SkeletonMoviePage: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <SkeletonElement type='poster' />
      <div className={styles.content}>
        <SkeletonElement type='title' />
        <SkeletonElement type='subtitle' />
        <SkeletonElement type='subtitle' />
        <SkeletonElement type='tags' />
        <Shimmer />
      </div>
    </div>
  );
};

export default SkeletonMoviePage;
