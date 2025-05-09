import { Tooltip } from '@radix-ui/themes';
import { useEffect, useState } from 'react';

interface ErrorTooltipProps {
  children: React.ReactNode;
  error: Error | null;
  position?: 'top' | 'bottom' | 'left' | 'right';
  duration?: number;
}

export function ErrorTooltip({
  children,
  error,
  duration = 3000,
  position = 'top',
}: ErrorTooltipProps) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (error) {
      setIsOpen(true);
      const timer = setTimeout(() => {
        setIsOpen(false);
      }, duration);

      return () => clearTimeout(timer);
    }
  }, [error, duration]);

  return (
    <Tooltip content={error?.message || 'An error occurred'} open={isOpen} side={position}>
      {children}
    </Tooltip>
  );
}
