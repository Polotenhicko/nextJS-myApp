import { combineReducers } from 'redux';
import { counterReducer } from './counterReducer';
import { messageReducer } from './messageReducer';

export const rootReducer = combineReducers({
  counter: counterReducer,
  message: messageReducer,
});
