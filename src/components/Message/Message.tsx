import styles from './styles.module.css';

interface IMessageProps {
  message: string;
}

const Message: React.FC<IMessageProps> = ({ message }) => {
  return <h2 className={styles.message}>{message}</h2>;
};

export default Message;
