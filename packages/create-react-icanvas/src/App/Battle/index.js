import React, { useMemo } from 'react';
import Background from './Background';
import Enemy from './Enemy';
import Boom from './Boom';
import Player from './Player';
import useCanvasOptions from 'apiHooks/useCanvasOptions';
import { useCollision } from '@icanvas/react-hooks-web';
export default function Component() {
  const { width, height, listener } = useCanvasOptions();
  const [ startX, startY ] = useMemo(() => [ width / 2 - 50, height - 100 ], [ width, height ]);
  const shape = useMemo(() => ({ type: 'rect', x: startX, y: startY, width: 100, height: 100 }), [ startX, startY ]);
  const listenEvents = useMemo(() => [
    listener,
    (e) => console.log(e),
    (e) => console.log(e),
    (e) => console.log(e),
    (e) => console.log(e)
  ], [ listener ]);
  useCollision(shape, listenEvents);
  return (
    <Background>
      <Enemy><Boom /></Enemy>
      <Player x={startX} y={startY} />
    </Background>
  );
}