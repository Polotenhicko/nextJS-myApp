'use client';
import { useEffect } from 'react';

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    console.log('mount dev layout');
    return () => {
      console.log('unmount dev layout');
    };
  }, []);
  return <div className="layout">{children}</div>;
}
