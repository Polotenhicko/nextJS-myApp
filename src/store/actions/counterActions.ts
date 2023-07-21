type TIncrementAction = {
  type: 'INCREMENT';
};

type TDecrementAction = {
  type: 'DECREMENT';
};

export type TCounterAction = TIncrementAction | TDecrementAction;

export const increment = (): TCounterAction => ({
  type: 'INCREMENT',
});

export const decrement = (): TCounterAction => ({
  type: 'DECREMENT',
});
