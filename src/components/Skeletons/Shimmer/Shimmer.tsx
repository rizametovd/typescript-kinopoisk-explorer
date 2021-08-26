import styles from './styles.module.css';
const Shimmer: React.FC = () => {
  return (
    <div className={styles.shimmerWrapper}>
      <div className={styles.shimmer}></div>
    </div>
  );
};
export default Shimmer;
