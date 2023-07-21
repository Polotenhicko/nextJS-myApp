import { TMessage } from '../../store/actions/messageActions';

export function Message({ message }: { message: TMessage }) {
  return (
    <div>
      <div>{message.login}</div>
      <div>{message.text}</div>
    </div>
  );
}
