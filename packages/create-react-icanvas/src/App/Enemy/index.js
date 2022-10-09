import { Image } from '@icanvas/react-components';
import useCanvasOptions from 'apiHooks/useCanvasOptions';
import enemy from './enemy.png';
export default function Component({ children }) {
  const { width } = useCanvasOptions();
  return (
    <Image x={width / 2 - 50} y={50} width={100} height={100} src={enemy}>
      { children }
    </Image>
  );
}