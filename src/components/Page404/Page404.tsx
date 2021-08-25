import GoBackLink from '../GoBackLink/GoBackLink';
import Message from '../Message/Message';
import styles from './styles.module.css';

const Page404: React.FC = () => {
  return (
    <section className={styles.section}>
      <GoBackLink text={'Назад'} />
      <div className={styles.container}>
        <h1 className={styles.text}>404</h1>
        <Message message={'Такой страницы нет'} />
      </div>
    </section>
  );
};

export default Page404;
