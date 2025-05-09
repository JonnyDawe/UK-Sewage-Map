import { now } from '@internationalized/date';
import { useInterval } from '@mantine/hooks';
import React from 'react';

function useUTCTime(refreshCycle = 1000) {
  const [time, setTime] = React.useState(() => now('UTC'));

  const { start } = useInterval(() => {
    setTime(now('UTC'));
  }, refreshCycle);

  // Sync with system clock on first render
  React.useEffect(() => {
    const currentTime = now('UTC');
    const timeToNextSecond = 1000 - currentTime.millisecond;
    const timer = setTimeout(() => {
      start();
    }, timeToNextSecond);

    return () => clearTimeout(timer);
  }, []);

  return time;
}

export default useUTCTime;
