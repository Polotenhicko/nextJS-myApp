import { TMessage } from '@/store/models/message';
import { Message } from './Message';
import styles from '../page.module.css';

export function MessageList({ messageList }: { messageList: TMessage[] }) {
  return (
    <div className={styles.messageList}>
      {messageList.map((message, i) => (
        <Message message={message} key={i} />
      ))}
    </div>
  );
}
