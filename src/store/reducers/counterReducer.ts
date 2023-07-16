const initialState: number = 0;

type TIncrementAction = {
  type: "INCREMENT";
};

type TDecrementAction = {
  type: "DECREMENT";
};

export type TCounterAction = TIncrementAction | TDecrementAction;

type TState = typeof initialState;

type TCounterReducer = (state: TState | undefined, action: TCounterAction) => TState;

export const counterReducer: TCounterReducer = (state = initialState, action: TCounterAction) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    default:
      return state;
  }
};
