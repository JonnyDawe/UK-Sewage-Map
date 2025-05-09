import { useCallbackRef } from '@mantine/hooks';
import { useEffect, useState } from 'react';

interface UseGraphicHighlightProps {
  layerView: __esri.GraphicsLayerView;
  graphic: __esri.Graphic;
  hightlightName?: string;
}

export function useGraphicHighlight({
  layerView,
  graphic,
  hightlightName,
}: UseGraphicHighlightProps) {
  const [highlightHandle, setHighlightHandle] = useState<__esri.Handle | null>(null);

  const highlight = useCallbackRef(() => {
    if (highlightHandle) {
      highlightHandle.remove();
    }
    setHighlightHandle(layerView.highlight(graphic, { name: hightlightName ?? 'default' }));
  });

  const clearHighlight = useCallbackRef(() => {
    if (highlightHandle) {
      highlightHandle.remove();
      setHighlightHandle(null);
    }
  });

  // Handle edge cases where mouseLeave might not fire
  useEffect(() => {
    const handleBlur = () => clearHighlight();
    const handleContextMenu = () => clearHighlight();
    const handleVisibilityChange = () => {
      if (document.hidden) {
        clearHighlight();
      }
    };

    window.addEventListener('blur', handleBlur);
    window.addEventListener('contextmenu', handleContextMenu);
    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      window.removeEventListener('blur', handleBlur);
      window.removeEventListener('contextmenu', handleContextMenu);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      clearHighlight();
    };
  }, [clearHighlight]);

  return {
    highlight,
    clearHighlight,
  };
}
