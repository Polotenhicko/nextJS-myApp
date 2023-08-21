'use client';
import { useEffect } from 'react';

export default function AboutTemplate({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    console.log('mount dev template');

    return () => {
      console.log('unmount dev template');
    };
  });
  return <div className="template">{children}</div>;
}
