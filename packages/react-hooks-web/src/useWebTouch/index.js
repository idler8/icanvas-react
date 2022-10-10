import { useEffect, useMemo } from 'react';
function getListener() {
  const events = { 'start': [], 'move': [], 'end': [], 'cancel': []};
  const on = (type, event) => events[type].push(event);
  const off = (type, event) => events[type].splice(events[type].indexOf(event), 1);
  return { events, on, off };
}
export default function useWebTouch(canvas) {
  const listener = useMemo(getListener, []);
  useEffect(() => {
    const removed = [];
    const anyListener = (type, target) => {
      const handler = (e) => {
        const touch = e.touches[0];
        const event = { type: e.type, clientX: touch.clientX, clientY: touch.clientY };
        listener.events[target].forEach((func) => func(event));
      };
      removed.push({ type, handler });
      canvas.addEventListener(type, handler);
    };
    anyListener('touchstart', 'start');
    anyListener('touchstart', 'start');
    anyListener('touchstart', 'start');
    anyListener('touchstart', 'start');
    return () => removed.forEach(e => canvas.removeEventListener(e.type, e.handler));
  }, [ listener ]);
  return listener;
}