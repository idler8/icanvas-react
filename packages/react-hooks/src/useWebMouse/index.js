import { useEffect } from 'react';

export default function useWebMouse(handler) {
  useEffect(() => {
    document.body.addEventListener('mousedown', handler);
    document.body.addEventListener('mousemove', handler);
    document.body.addEventListener('mouseup', handler);
    return () => {
      document.body.removeEventListener('mousedown', handler);
      document.body.removeEventListener('mousemove', handler);
      document.body.removeEventListener('mouseup', handler);
    };
  }, [ handler ]);
}