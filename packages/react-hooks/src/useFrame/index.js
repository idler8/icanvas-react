import { useEffect } from 'react';

export default function useFrame(handler, deps = [ 60 ]) {
  useEffect(() => {
    const fps = 1000 / (deps[0] || 60);
    const timer = setInterval(handler, fps);
    return () => clearInterval(timer);
  }, deps);
}