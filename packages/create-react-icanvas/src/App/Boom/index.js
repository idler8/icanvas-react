import { Image } from '@icanvas/react-components';
import useCanvasOptions from 'apiHooks/useCanvasOptions';
import { useEffect, useState } from 'react';
import explosion1 from './Resources/explosion1.png';
import explosion2 from './Resources/explosion2.png';
import explosion3 from './Resources/explosion3.png';
import explosion4 from './Resources/explosion4.png';
import explosion5 from './Resources/explosion5.png';
import explosion6 from './Resources/explosion6.png';
import explosion7 from './Resources/explosion7.png';
import explosion8 from './Resources/explosion8.png';
import explosion9 from './Resources/explosion9.png';
import explosion10 from './Resources/explosion10.png';
import explosion11 from './Resources/explosion11.png';
import explosion12 from './Resources/explosion12.png';
import explosion13 from './Resources/explosion13.png';
import explosion14 from './Resources/explosion14.png';
import explosion15 from './Resources/explosion15.png';
import explosion16 from './Resources/explosion16.png';
import explosion17 from './Resources/explosion17.png';
import explosion18 from './Resources/explosion18.png';
import explosion19 from './Resources/explosion19.png';
const textures = [
  explosion1,
  explosion2,
  explosion3,
  explosion4,
  explosion5,
  explosion6,
  explosion7,
  explosion8,
  explosion9,
  explosion10,
  explosion11,
  explosion12,
  explosion13,
  explosion14,
  explosion15,
  explosion16,
  explosion17,
  explosion18,
  explosion19,
];
export default function Component({ children }) {
  const { width } = useCanvasOptions();
  const [ texture, setTexture ] = useState(explosion1);
  useEffect(() => {
    setInterval(() => {
      setTexture((texture) => textures[textures.indexOf(texture) + 1]);
    }, 100);
  }, []);
  return (
    <Image x={width / 2 - 50} y={50} width={100} height={100} src={texture}>
      { children }
    </Image>
  );
}