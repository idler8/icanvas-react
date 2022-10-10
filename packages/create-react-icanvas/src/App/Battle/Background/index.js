import { useImage, useFrame } from '@icanvas/react-hooks-web';
import useCanvasOptions from 'apiHooks/useCanvasOptions';
import { useMemo, useState } from 'react';
import bg from './bg.jpg';
function Textures({ source, children }) {
  const { width, height } = useCanvasOptions();
  const autoHeight = useMemo(() => width * (source.width / source.height), [ source, width ]);
  const textures = useMemo(() => {
    const length = Math.ceil(height / autoHeight) + 1;
    return Array.apply(null, { length }).map((_, i) => height - autoHeight - i * autoHeight);
  }, [ autoHeight, height ]);
  const [ y, setY ] = useState(0);
  useFrame(() => setY((y) => (y + 8) % autoHeight), [ 60, autoHeight ]);
  return (
    <>
      { textures.map((e, i) => <texture key={i} y={e + y} width={width} height={autoHeight} source={source} />) }
      { children }
    </>
  );
}
export default function Component(props) {
  const source = useImage(bg);
  return source && <Textures source={source} {...props} />;
}