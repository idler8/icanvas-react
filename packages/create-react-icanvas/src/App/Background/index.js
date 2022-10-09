import { Image } from '@icanvas/react-components';
import useCanvasOptions from 'apiHooks/useCanvasOptions';
import bg from './bg.jpg';
export default function Component({ children }) {
  const { width, height } = useCanvasOptions();
  return (
    <Image width={width} height={height} src={bg}>
      { children }
    </Image>
  );
}