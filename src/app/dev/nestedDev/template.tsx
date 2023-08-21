'use client';
import { useEffect } from 'react';

export default function NestedTemplate({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    console.log('mount nested dev template');

    return () => {
      console.log('unmount nested dev template');
    };
  });
  return <div className="nestedTemplate">{children}</div>;
}
