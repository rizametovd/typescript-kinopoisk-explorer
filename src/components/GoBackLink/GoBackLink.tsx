import { Link, useHistory } from 'react-router-dom';
import styles from './styles.module.css';

interface IGoBackLinkProps {
  text: string;
}

const GoBackLink: React.FC<IGoBackLinkProps> = ({ text }) => {
  const history = useHistory();

  return (
    <button className={styles.goBackButton} onClick={() => history.goBack()}>
      {text}
    </button>
  );
};

export default GoBackLink;
