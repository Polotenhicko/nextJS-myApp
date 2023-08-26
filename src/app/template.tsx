'use client';

import { useEffect, useState } from 'react';

export default function MainTemplate({ children }: { children: React.ReactNode }) {
  // throw new Error();
  const [isError, setIsError] = useState(false);
  const handleSetError = (e: KeyboardEvent) => {
    console.log(e.key);

    if (e.key === 'Escape') {
      setIsError(true);
    }
  };
  useEffect(() => {
    document.body.addEventListener('keydown', handleSetError);

    return () => {
      document.body.removeEventListener('keydown', handleSetError);
    };
  }, []);

  useEffect(() => {
    if (isError) {
      throw new Error();
    }
  }, [isError]);

  useEffect(() => {
    console.log('update main template');
    return () => {
      console.log('reupdate main template');
    };
  });

  return <div className="mainTemplate">{children}</div>;
}
