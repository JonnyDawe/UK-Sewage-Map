import { useMediaQuery, useMounted } from '@mantine/hooks';

export default function useIsMobile() {
  const isMounted = useMounted();
  const isMobile = useMediaQuery('(max-width: 768px)', false);

  if (!isMounted) {
    return undefined;
  }

  return isMobile;
}
