import { useEffect } from 'react';

export default function useWebTouch(handler) {
  useEffect(() => {
    document.body.addEventListener('touchstart', handler);
    document.body.addEventListener('touchmove', handler);
    document.body.addEventListener('touchend', handler);
    document.body.addEventListener('touchcancel', handler);
    return () => {
      document.body.removeEventListener('touchstart', handler);
      document.body.removeEventListener('touchmove', handler);
      document.body.removeEventListener('touchend', handler);
      document.body.removeEventListener('touchcancel', handler);
    };
  }, [ handler ]);
}