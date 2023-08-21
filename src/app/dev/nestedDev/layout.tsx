'use client';
import { useEffect } from 'react';

export default function NestedLayout({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    console.log('mount nested dev layout');
    return () => {
      console.log('unmount nested dev layout');
    };
  }, []);
  return <div className="nestedLayout">{children}</div>;
}
