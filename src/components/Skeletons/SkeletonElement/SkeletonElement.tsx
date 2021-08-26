import styles from './styles.module.css';

interface ISkeletonProps {
  type: string;
  width?: string;
}

const SkeletonElement: React.FC<ISkeletonProps> = ({ type }) => {
  const classes = `${styles.skeleton} ${styles[type]}`;

  return <div className={classes}> </div>;
};

export default SkeletonElement;
