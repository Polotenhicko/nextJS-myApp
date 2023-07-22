'use client';
import styles from './page.module.css';
import { ControlPanel } from './component/ControlPanel';
import { MessageList } from './component/MessageList';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TMessage } from '@/store/models/message';
import { connect, disconnect } from '@/store/actions/socketAction';

async function getSocketURL() {
  const res = await fetch('/api');
  return await res.json();
}

export default function Home() {
  const messages = useSelector(({ messages }: { messages: TMessage[] }) => messages);
  const dispatch = useDispatch();

  useEffect(() => {
    getSocketURL().then((socketURL: string) => {
      dispatch(connect(socketURL));
    });
    return () => {
      dispatch(disconnect());
    };
  }, []);

  return (
    <main className={styles.main}>
      <MessageList messageList={messages} />
      <ControlPanel />
    </main>
  );
}
