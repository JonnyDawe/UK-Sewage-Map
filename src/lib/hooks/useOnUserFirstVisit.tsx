import React from 'react';

export function useOnFirstVisit(callback: () => void) {
  React.useEffect(() => {
    if (!callback) {
      return;
    }
    try {
      const hasVisited = localStorage.getItem('visitedPage');
      if (!hasVisited) {
        localStorage.setItem('visitedPage', new Date().toJSON());
        callback();
      }
    } catch (error) {
      console.error('Error accessing local storage:', error);
    }
  }, [callback]);
}
