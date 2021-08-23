import styles from './styles.module.css';

export const Preloader: React.FC = () => {
    return (
        <div className={styles.preloader}>
            <p className={styles.text}>Загрузка...</p>
        </div>
    )
}

export default Preloader;