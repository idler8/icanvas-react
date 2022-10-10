import { useEffect, useRef } from 'react';

function isInPolygon(checkPoint, polygonPoints) {
  let counter = 0;
  let i;
  let xinters;
  let p1, p2;
  const pointCount = polygonPoints.length;
  p1 = polygonPoints[0];

  for (i = 1; i <= pointCount; i++) {
    p2 = polygonPoints[i % pointCount];
    if (
      checkPoint[0] > Math.min(p1[0], p2[0]) && checkPoint[0] <= Math.max(p1[0], p2[0])
    ) {
      if (checkPoint[1] <= Math.max(p1[1], p2[1])) {
        if (p1[0] != p2[0]) {
          xinters = (checkPoint[0] - p1[0]) * (p2[1] - p1[1]) / (p2[0] - p1[0]) + p1[1];
          if (p1[1] == p2[1] || checkPoint[1] <= xinters) {
            counter++;
          }
        }
      }
    }
    p1 = p2;
  }
  if (counter % 2 == 0) {
    return false;
  } else {
    return true;
  }
}
function cricleCollision({ radio, x = radio, y = radio }, { clientX, clientY }) {
  const dx = Math.abs(clientX - x);
  const dy = Math.abs(clientY - y);
  const dist = Math.sqrt(Math.pow(dx, 2) + Math.pow(dy, 2));
  return dist < radio;
}
function rectCollision({ x = 0, y = 0, width, height }, { clientX, clientY }) {
  const vertices = [ [ x, y ], [ x + width, y ], [ x + width, y + height ], [ x, y + height ] ];
  return isInPolygon([ clientX, clientY ], vertices);
}
// eslint-disable-next-line no-unused-vars
function lineCollision({ vertices, width }, { clientX, clientY }) {
  // TODO 线形碰撞
  return false;
}
export default function useCollision(shape, deps) {
  console.log('deps', deps);
  const ref = useRef();
  useEffect(() => {
    ref.current = shape;
  }, [ shape ]);
  useEffect(() => {
    const [ listener, onStart, onMove, onEnd, onCancel ] = deps;
    const removed = [];
    const anyListener = (type, event) => {
      if (!event) return;
      const handler = (e) => {
        if (ref.current.type === 'cricle') return cricleCollision(ref.current, e) && event(e);
        if (ref.current.type === 'rect') return rectCollision(ref.current, e) && event(e);
        if (ref.current.type === 'line') return lineCollision(ref.current, e) && event(e);
        return isInPolygon([ e.clientX, e.clientY ], ref.current.vertices, e) && event(e);
      };
      removed.push({ type, handler });
      listener.on(type, handler);
    };
    anyListener('start', onStart);
    anyListener('move', onMove);
    anyListener('end', onEnd);
    anyListener('cancel', onCancel);
    return () => removed.forEach(e => listener.off(e.type, e.handler));
  }, deps);
}