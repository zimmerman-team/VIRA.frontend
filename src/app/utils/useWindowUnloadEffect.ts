import { useEffect, useRef, useState } from 'react';

export const useWindowUnloadEffect = (handler: any, callOnCleanup: any) => {
  const cb = useRef();

  cb.current = handler;

  useEffect(() => {
    const handler = () => {
      if (cb) {
        //@ts-ignore
        cb.current();
      }
    };

    window.addEventListener('beforeunload', handler);

    return () => {
      if (callOnCleanup) handler();

      window.removeEventListener('beforeunload', handler);
    };
  }, [cb]);
};
