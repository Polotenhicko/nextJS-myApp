import { TMessage } from '../../store/actions/messageActions';
import { Message } from './Message';

export function MessageList({ messageList }: { messageList: TMessage[] }) {
  return (
    <div>
      {messageList.map((message) => (
        <Message message={message} />
      ))}
    </div>
  );
}
