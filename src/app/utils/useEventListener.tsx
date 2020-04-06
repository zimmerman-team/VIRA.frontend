import { useRef, useEffect } from 'react';

export function useEventListener(
  eventName: string,
  handler: any,
  element = window
) {
  const savedHandler = useRef();

  useEffect(() => {
    savedHandler.current = handler;
  }, [handler]);

  useEffect(() => {
    const isSupported = element && element.addEventListener;
    if (!isSupported) return;
    const eventListener = (event: any) => {
      if (savedHandler.current) {
        //@ts-ignore
        savedHandler.current(event);
      }
    };
    element.addEventListener(eventName, eventListener);

    return () => {
      element.removeEventListener(eventName, eventListener);
    };
  }, [eventName, element]);
}
