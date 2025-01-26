import React from 'react';

export function useUTCTime(): [number] {
  const [currentUTCTime, setCurrentUTCTime] = React.useState(Date.now());
  React.useEffect(() => {
    const timerId = setInterval(() => {
      setCurrentUTCTime(Date.now());
    }, 1000);

    return () => {
      clearInterval(timerId);
    };
  }, []);

  return [currentUTCTime];
}
