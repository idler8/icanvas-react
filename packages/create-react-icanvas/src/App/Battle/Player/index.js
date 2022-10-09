import { useImage, useWebTouch } from '@icanvas/react-hooks';
import useCanvasOptions from 'apiHooks/useCanvasOptions';
import { useMemo } from 'react';
import player from './hero.png';

export default function Component({ children, onTouchStart }) {
  const source = useImage(player);
  const { width, height } = useCanvasOptions();
  const [ x, y ] = useMemo(() => [ width / 2 - 50, height - 100 ], [ width, height ]);
  useWebTouch((e) => console.log(e.type) || onTouchStart(e));
  return (
    <texture x={x} y={y} width={100} height={100} source={source}>
      { children }
    </texture>
  );
}