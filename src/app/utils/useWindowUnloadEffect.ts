import { useEffect, useRef } from 'react';

export const useWindowUnloadEffect = (handlerVar: any, callOnCleanup: any) => {
  const cb = useRef();

  cb.current = handlerVar;

  useEffect(() => {
    const handler = () => {
      if (cb) {
        // @ts-ignore
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
