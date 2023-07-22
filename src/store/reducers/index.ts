import { combineReducers } from 'redux';
import { messageReducer } from './messageReducer';
import { socketReducer } from './socketReducer';

export const rootReducer = combineReducers({
  messages: messageReducer,
  socket: socketReducer,
});
