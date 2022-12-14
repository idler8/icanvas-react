import { useImage } from '@icanvas/react-hooks-web';
import useCanvasOptions from 'apiHooks/useCanvasOptions';
import enemy from './enemy.png';
export default function Component({ children }) {
  const { width } = useCanvasOptions();
  const source = useImage(enemy);
  return (
    <texture x={width / 2 - 50} y={50} width={100} height={100} source={source} name="enemy">
      { children }
    </texture>
  );
}