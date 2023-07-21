'use client';
import styles from './page.module.css';
import { ControlPanel } from './component/ControlPanel';
import { MessageList } from './component/MessageList';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TMessageState } from '../store/reducers/messageReducer';
import { connect } from '@/store/actions/messageActions';

async function getSocketURL() {
  const res = await fetch('/api');
  return await res.json();
}

export default function Home() {
  const message = useSelector(({ message }: { message: TMessageState }) => message);
  const dispatch = useDispatch();

  useEffect(() => {
    getSocketURL().then((socketURL: string) => {
      dispatch(connect(socketURL));
    });
  }, []);

  return (
    <main className={styles.main}>
      <MessageList messageList={[]} />
      <ControlPanel />
    </main>
  );
}
