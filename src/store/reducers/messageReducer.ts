import { TMessage } from '../models/message';
import { TMessageActions } from '../actions/messageActions';
import { socket } from '@/utils/Socket';

const initialState: TMessage[] = [];

export const messageReducer = (state = initialState, action: TMessageActions) => {
  switch (action.type) {
    case 'RECEIVED_MESSAGE':
      return [...state, action.payload];
    default:
      return state;
  }
};
