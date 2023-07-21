import { TMessage } from '../../store/actions/messageActions';
import { Message } from './Message';

export function MessageList({ messageList }: { messageList: TMessage[] }) {
  return (
    <div>
      {messageList.map((message, i) => (
        <Message message={message} key={i} />
      ))}
    </div>
  );
}
