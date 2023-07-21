import { TMessage } from '../actions/messageActions';
import { TMessageAction } from '../actions/messageActions';
import { Socket } from '@/utils/Socket';

export type TMessageState = {
  messageList: TMessage[];
  _socket: Socket;
};

const initialState: TMessageState = {
  messageList: [],
  _socket: new Socket(),
};

export const messageReducer = (state = initialState, action: TMessageAction) => {
  switch (action.type) {
    case 'CONNECT':
      state._socket.connect(action.payload);
      return { ...state };
    case 'ON_EVENT':
      state._socket.on(action.payload.eventName, action.payload.callback);
      return { ...state };
    case 'RECEIVED_MESSAGE':
      state.messageList.push(action.payload);
      return { ...state };
    default:
      return state;
  }
};
