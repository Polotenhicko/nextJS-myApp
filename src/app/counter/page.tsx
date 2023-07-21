'use client';
import { decrement, increment } from '@/store/actions/counterActions';
import { useDispatch, useSelector } from 'react-redux';

export default function Counter() {
  const counter = useSelector(({ counter }: { counter: number }) => counter);
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(increment());
  };

  const handleDecrement = () => {
    dispatch(decrement());
  };
  return (
    <div>
      {counter}
      <div>
        <button onClick={handleIncrement}>Увеличить</button>
        <button onClick={handleDecrement}>Уменьшить</button>
      </div>
    </div>
  );
}
