import { TMessage } from '../models/message';

type TMessageReceivedAction = {
  type: 'RECEIVED_MESSAGE';
  payload: TMessage;
};

export type TMessageActions = TMessageReceivedAction;

// actions

export const receivedMessage = (message: TMessage): TMessageReceivedAction => ({
  type: 'RECEIVED_MESSAGE',
  payload: message,
});
