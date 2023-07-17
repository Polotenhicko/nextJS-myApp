"use client";
import { decrement, increment } from "@/store/actions/counterActions";
import styles from "./page.module.css";
import { useDispatch, useSelector } from "react-redux";

export default function Home() {
  const counter: number = useSelector(({ counter }) => counter);
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(increment());
  };

  const handleDecrement = () => {
    dispatch(decrement());
  };

  return (
    <main className={styles.main}>
      <div>{counter}</div>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
    </main>
  );
}
