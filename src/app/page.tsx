'use client';
import styles from './page.module.css';
import { ControlPanel } from './component/ControlPanel';
import { MessageList } from './component/MessageList';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TMessage } from '@/store/models/message';
import { connect, disconnect } from '@/store/actions/socketAction';
import Link from 'next/link';

async function getSocketURL() {
  const res = await fetch('/api');
  return await res.json();
}

async function getTrain(): Promise<string> {
  await new Promise<void>((res) => {
    setTimeout(() => res(), 3e3);
  });

  return 'zopa';
}

export default async function Home() {
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

  const data = await getTrain();

  return (
    <main className={styles.main}>
      <MessageList messageList={messages} />
      <ControlPanel />
      <Link href={'/dev'} scroll={false} prefetch={false}>
        dev
      </Link>
      <a href="/dev">dev</a>
      <div>
        {['aboba', '123123'].map((id) => (
          <div key={id}>
            <Link href={`/blog/${id}`}>{`/blog/${id}`}</Link>
          </div>
        ))}
      </div>
      {data}
    </main>
  );
}
