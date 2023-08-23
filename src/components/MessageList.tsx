import { TMessage } from '@/store/models/message';
import { Message } from '@/app/components/Message';
import styles from '@/app/page.module.css';

export function MessageList({ messageList }: { messageList: TMessage[] }) {
  return (
    <div className={styles.messageList}>
      {messageList.map((message, i) => (
        <Message message={message} key={i} />
      ))}
    </div>
  );
}
