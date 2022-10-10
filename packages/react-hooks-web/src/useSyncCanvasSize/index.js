import { useEffect } from 'react';

export default function useSyncCanvasSize(canvas, options) {
  useEffect(() => {
    const { x, y, width, height } = options;
    canvas.style.position = 'absolute';
    canvas.style.top = y + 'px';
    canvas.style.left = x + 'px';
    canvas.style.width = width + 'px';
    canvas.style.height = height + 'px';
    canvas.width = width;
    canvas.height = height;
  }, [ canvas, options ]);
}