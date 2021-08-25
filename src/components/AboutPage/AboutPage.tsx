import styles from './styles.module.css';
import ReactLogo from '../../images/react-logo.svg';
import TypeScriptLogo from '../../images/ts-logo.svg';
import ReduxLogo from '../../images/redux-logo.svg';
const AboutPage: React.FC = () => {
  return (
    <section className={styles.section}>
      <h1 className={styles.title}>О проекте</h1>
      <p className={styles.text}>Пэт проект. Поиск фильмов по базе Кинопоиска.</p>

      <h2 className={styles.subTitle}>Задача</h2>
      <ul className={styles.taskList}>
        <li className={styles.taskListItem}>Адаптивно сверстать</li>
        <li className={styles.taskListItem}>Типизировать компоненты</li>
        <li className={styles.taskListItem}>Для хранения данных использовать Redux</li>
      </ul>

      <h2 className={styles.subTitle}>Инструменты</h2>
      <ul className={styles.toolsList}>
        <li className={styles.toolsListItem}>
          <img src={ReactLogo} alt='Логотип Реакта' className={styles.logoImg} />
          <span>React</span>
        </li>
        <li className={styles.toolsListItem}>
          <img src={TypeScriptLogo} alt='Логотип TypeScript' className={styles.logoImg} />
          <span>TypeScript</span>
        </li>
        <li className={styles.toolsListItem}>
          <img src={ReduxLogo} alt='Логотип Redux' className={styles.logoImg} />
          <span>Redux</span>
        </li>
      </ul>
    </section>
  );
};

export default AboutPage;
