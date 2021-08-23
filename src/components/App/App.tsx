import { Provider } from 'react-redux';
import { store } from '../../store';
import '../../vendor/normalize.css';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Main from '../Main/Main';
import styles from './styles.module.css';

const App: React.FC = () => {
  return (
    <div className={styles.page}>
      <Provider store={store}>
        <Header />
        <Main />
        <Footer />
      </Provider>
    </div>
  );
};

export default App;
