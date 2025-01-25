import { useIsClient, useMediaQuery } from 'usehooks-ts';

export default function useIsMobile() {
  const isClient = useIsClient();
  const matches = useMediaQuery('(min-width: 768px)');
  if (!isClient) {
    return undefined;
  }

  return !matches;
}
