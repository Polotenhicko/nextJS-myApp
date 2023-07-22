import { socket } from '@/utils/Socket';
import { TSocketActions } from '../actions/socketAction';
import { store } from '../store';

const initialState = socket;

export const socketReducer = (state = initialState, action: TSocketActions) => {
  switch (action.type) {
    case 'CONNECT':
      state.connect(action.payload);
      state.on('message', (e) => {
        if (!(e instanceof MessageEvent)) return;
        try {
          const action = JSON.parse(e.data);
          store.dispatch(action);
        } catch (e) {
          console.error(e);
        }
      });
      return state;
    case 'SEND_MESSAGE':
      state.send(action.payload);
      return state;
    case 'DISCONNECT':
      state.disconnect();
      return state;
    default:
      return state;
  }
};
