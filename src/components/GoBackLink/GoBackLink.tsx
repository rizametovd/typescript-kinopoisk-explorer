import { Link, useHistory } from 'react-router-dom';
import styles from './styles.module.css';

interface IGoBackLinkProps {
  text: string;
}

const GoBackLink: React.FC<IGoBackLinkProps> = ({ text }) => {
  const history = useHistory();

  return (
    <Link className={styles.link} to='/' onClick={() => history.goBack()}>
      {text}
    </Link>
  );
};

export default GoBackLink;
