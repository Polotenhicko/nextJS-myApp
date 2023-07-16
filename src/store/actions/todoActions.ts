import { TTodoAction } from "../reducers/todoReducer";

let maxId = 1;

export const addTodo = (text: string): TTodoAction => ({
  type: "ADD_TODO",
  payload: {
    id: maxId++,
    text: text,
  },
});
