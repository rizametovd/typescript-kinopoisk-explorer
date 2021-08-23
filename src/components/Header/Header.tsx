import SearchForm from '../SearchForm/SearchForm';
import styles from './styles.module.css';
import { Link } from 'react-router-dom';
import Logo from '../../images/logo.svg';
import { ABOUT_PAGE, MAIN_PAGE } from '../../utils/constants';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <Link to={MAIN_PAGE}>
        <img src={Logo} alt='Лого' className={styles.logo} />
      </Link>

      <SearchForm />
      <ul className={styles.list}>
        <li className={styles.listItem}>
          <Link to={`/${ABOUT_PAGE}`} className={styles.link}>
            О проекте
          </Link>
        </li>
        <li className={styles.listItem}>
          <a
            href='https://github.com/rizametovd/typescript-kinopoisk-explorer'
            className={styles.link}
            target='_blank'
            rel='noreferrer'
          >
            Репозиторий проекта
          </a>
        </li>
      </ul>
    </header>
  );
};

export default Header;
