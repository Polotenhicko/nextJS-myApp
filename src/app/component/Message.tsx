import { TMessage } from '@/store/models/message';
import styles from '../page.module.css';

export function Message({ message }: { message: TMessage }) {
  return (
    <div className={styles.message}>
      <div className={styles.messageLogin}>{message.login}</div>
      <div className={styles.messageText}>{message.text}</div>
    </div>
  );
}
