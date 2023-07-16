const initialState: TToDo[] = [];

type TAddTodo = {
  type: "ADD_TODO";
  payload: TToDo;
};

export type TToDo = {
  id: number;
  text: string;
};

export type TTodoAction = TAddTodo;

type TState = typeof initialState;

type TTodoReducer = (state: TState | undefined, action: TTodoAction) => TState;

export const todoReducer: TTodoReducer = (state = initialState, action: TTodoAction) => {
  switch (action.type) {
    case "ADD_TODO":
      return [...state, action.payload];
    default:
      return state;
  }
};
