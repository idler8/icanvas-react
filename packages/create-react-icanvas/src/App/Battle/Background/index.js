import { useImage } from '@icanvas/react-hooks';
import useCanvasOptions from 'apiHooks/useCanvasOptions';
import bg from './bg.jpg';
export default function Component({ children }) {
  const { width, height } = useCanvasOptions();
  const source = useImage(bg);
  return (
    <texture width={width} height={height} source={source}>
      { children }
    </texture>
  );
}