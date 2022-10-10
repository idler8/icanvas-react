import { useMemo } from 'react';

export default function useCanvasSize(realWidth, realHeight) {
  return useMemo(() => {
    let offsetWidth = realWidth;
    let offsetLeft = 0;
    let offsetHeight = realHeight;
    let offsetTop = 0;
    let ratio = realWidth / realHeight;
    if (ratio < 0.4) {
      offsetHeight = realWidth / 750 * 1334;
      offsetTop = (realHeight - offsetHeight) / 2;
      ratio = 750 / 1334;
    } else if (ratio > 0.8) {
      offsetWidth = realHeight / 1334 * 750;
      offsetLeft = (realWidth - offsetWidth) / 2;
      ratio = 750 / 1334;
    }
    return { x: offsetLeft, y: offsetTop, width: offsetWidth, height: offsetHeight, ratio };
  }, [ realWidth, realHeight ]);
}