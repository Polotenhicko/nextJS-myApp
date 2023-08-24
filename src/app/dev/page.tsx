'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function About() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (count) {
      throw new Error();
    }
  });
  return (
    <div>
      <h1 onClick={() => setCount(count + 1)}>Error?</h1>
      <Link href={'/'}>main</Link>
      <Link href={'/dev/nestedDev'}>nestedDev</Link>
    </div>
  );
}
