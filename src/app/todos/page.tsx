// "use client";
import { useSelector, useDispatch } from "react-redux/es/exports";
import { TToDo } from "@/store/reducers/todoReducer";
import { addTodo } from "@/store/actions/todoActions";
import { useState } from "react";

export default function ToDos() {
  // const todos: TToDo[] = useSelector(({ todos }) => todos);
  // const dispatch = useDispatch();

  // const [value, setValue] = useState("");

  // const handleAddTodo = (val: string) => {
  //   dispatch(addTodo(val));
  // };
  // return (
  //   <div>
  //     {todos.map((todo) => (
  //       <div key={todo.id}>{todo.text}</div>
  //     ))}
  //     <div>
  //       <input type="text" value={value} onChange={(e) => setValue(e.target.value)} />
  //       <button onClick={() => handleAddTodo(value)}>Отправить</button>
  //     </div>
  //   </div>
  // );
  return <div>123</div>;
}
