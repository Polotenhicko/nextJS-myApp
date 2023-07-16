import { createStore } from "redux";
import { rootReducer } from "./reducers";

const initialState = {
  counter: 0,
  todos: [],
};

export const store = createStore(rootReducer, initialState);
