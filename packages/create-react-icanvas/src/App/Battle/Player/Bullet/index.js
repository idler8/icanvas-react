import { useImage } from '@icanvas/react-hooks-web';
import useCanvasOptions from 'apiHooks/useCanvasOptions';
import bullet from './bullet.png';
export default function Component({ children }) {
  const { width, height } = useCanvasOptions();
  const source = useImage(bullet);
  return (
    <texture x={width / 2 - 50} y={height - 100} width={100} height={100} source={source}>
      { children }
    </texture>
  );
}