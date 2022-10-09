import { Image } from '@icanvas/react-components';
import useCanvasOptions from 'apiHooks/useCanvasOptions';
import player from './hero.png';
export default function Component({ children }) {
  const { width, height } = useCanvasOptions();
  return (
    <Image x={width / 2 - 50} y={height - 100} width={100} height={100} src={player}>
      { children }
    </Image>
  );
}