import styles from './styles.module.css';
import SkeletonElement from '../SkeletonElement/SkeletonElement';
import Shimmer from '../Shimmer/Shimmer';

const SkeletonPagination: React.FC = () => {
  return (
    <li className={styles.listItem}>
      <SkeletonElement type='pagination' />
      <Shimmer />
    </li>
  );
};

export default SkeletonPagination;
