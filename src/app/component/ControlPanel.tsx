import { sendMessage } from '@/store/actions/socketAction';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styles from '../page.module.css';

export function ControlPanel() {
  const [login, setNickname] = useState('');
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const message = {
      login,
      text,
    };
    dispatch(sendMessage(message));
  };

  return (
    <form onSubmit={handleSubmit} className={styles.controlPanel}>
      <input
        className={styles.inputLogin}
        type="text"
        placeholder="Логин"
        value={login}
        maxLength={20}
        required
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNickname(e.target.value)}
      />
      <textarea
        className={styles.inputText}
        placeholder="Текст"
        value={text}
        maxLength={500}
        rows={10}
        required
        onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setText(e.target.value)}
      />
      <button className={styles.controlButton}>Отправить</button>
    </form>
  );
}
