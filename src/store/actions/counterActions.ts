import { TCounterAction } from "../reducers/counterReducer";

export const increment = (): TCounterAction => ({
  type: "INCREMENT",
});

export const decrement = (): TCounterAction => ({
  type: "DECREMENT",
});
