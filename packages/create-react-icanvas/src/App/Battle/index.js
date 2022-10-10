import React, { useMemo } from 'react';
import Background from './Background';
import Enemy from './Enemy';
import Boom from './Boom';
import Player from './Player';
import useCanvasOptions from 'apiHooks/useCanvasOptions';
export default function Component() {
  const { width, height } = useCanvasOptions();
  const [ startX, startY ] = useMemo(() => [ width / 2 - 50, height - 100 ], [ width, height ]);
  return (
    <Background>
      <Enemy />
      <Boom />
      <Player x={startX} y={startY} />
    </Background>
  );
}