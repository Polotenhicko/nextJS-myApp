import { TCounterAction } from '../actions/counterActions';

const initialState: number = 0;

type TState = typeof initialState;

export const counterReducer = (state: TState = initialState, action: TCounterAction) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
};
