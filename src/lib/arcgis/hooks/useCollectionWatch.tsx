import * as reactiveUtils from '@arcgis/core/core/reactiveUtils';
import React from 'react';

/**
 * A hook that watches a collection and returns its current items.
 *
 * @param collection The collection to watch
 * @param options Optional configuration for the watch behavior
 * @returns The current items in the collection
 */
export function useCollectionWatch<T>(
  collection: {
    toArray: () => T[];
    length: number;
  },
  options?: {
    initialValue?: T[];
    watchOptions?: __esri.ReactiveWatchOptions;
  },
) {
  const [items, setItems] = React.useState<T[]>(
    () => options?.initialValue ?? collection.toArray(),
  );

  React.useEffect(() => {
    const handle = reactiveUtils.watch(
      () => collection.length,
      () => setItems(collection.toArray()),
      { initial: true, ...options?.watchOptions },
    );

    return () => handle.remove();
  }, [collection, options?.watchOptions]);

  return items;
}
