import React, { useState } from 'react';
import { Config } from 'apiHooks/useCanvasOptions';
import { useResize, useCanvasSize, useSyncCanvasSize } from '@icanvas/react-web-hooks';
import Battle from './Battle';
export default function App({ canvas }) {
  const [ width, setWidth ] = useState(window.innerWidth);
  const [ height, setHeight ] = useState(window.innerHeight);
  useResize(() => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  });
  const options = useCanvasSize(width, height);
  useSyncCanvasSize(canvas, options);
  return (
    <Config value={options}>
      <Battle />
    </Config>
  );
}