import styles from './styles.module.css';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <span className={styles.text}>{new Date().getFullYear()}</span>
    </footer>
  );
};

export default Footer;
