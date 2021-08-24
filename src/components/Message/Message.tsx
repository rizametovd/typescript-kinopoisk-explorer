import styles from './styles.module.css';

interface IMessageProps {
  message: string;
}

const Message: React.FC<IMessageProps> = ({ message }) => {
  return <h1 className={styles.message}>{message}</h1>;
};

export default Message;
