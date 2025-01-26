import { watch, when } from '@arcgis/core/core/reactiveUtils';
import { useCallback, useEffect, useState } from 'react';

export function useWatchEffect<T>(
  getValue: () => T,
  callback: (newValue: T, oldValue: T) => void,
  options?: __esri.ReactiveWatchOptions,
) {
  useEffect(() => {
    // Watch for changes to value
    const handle = watch(getValue, callback, { initial: true, ...options });

    // Remove watch when component unmounts
    return () => {
      handle.remove();
    };
  }, [callback, getValue, options]);
}

export function useWhenEffect<T>(
  getValue: () => T,
  callback: (newValue: T, oldValue: T | null) => void,
  options?: __esri.ReactiveWatchOptions,
) {
  useEffect(() => {
    // Watch for changes to value
    const handle = when(getValue, callback, { initial: true, ...options });

    // Remove watch when component unmounts
    return () => {
      handle.remove();
    };
  }, [callback, getValue, options]);
}

export function useWatchState<T>(
  getValue: () => T,
  deps?: unknown[],
  options?: __esri.ReactiveWatchOptions,
): T | undefined {
  const [state, setState] = useState<T>();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const cb = useCallback(getValue, deps ?? []);

  useWatchEffect(cb, setState, options);

  return state;
}

export function useArcState<T extends __esri.Accessor, Property extends keyof T>(
  acc: T,
  property: Property,
): [T[Property], React.Dispatch<React.SetStateAction<T[Property]>>] {
  const [state, setState] = useState<T[Property]>(acc[property]);

  useWatchEffect(() => acc[property], setState);

  const setArcState = useCallback(
    (newValue: React.SetStateAction<T[Property]>) => {
      if (typeof newValue === 'function') {
        newValue = (newValue as (oldValue: T[Property]) => T[Property])(acc[property]);
      }

      acc.set(property as string, newValue);
      setState(newValue);
    },
    [acc, property],
  );

  return [state, setArcState];
}
