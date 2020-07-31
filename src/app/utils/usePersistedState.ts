import React from 'react';

export function usePersistedState(key: string, defaultValue: any) {
  // console.log(defaultValue);
  const [state, setState] = React.useState(() =>
    localStorage.getItem(key)
      ? JSON.parse(localStorage.getItem(key) || '')
      : defaultValue
  );
  React.useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);
  return [state, setState];
}
