import { useImage } from '@icanvas/react-web-hooks';
import player from './hero.png';

export default function Component({ x, y, children }) {
  const source = useImage(player);
  return (
    <texture x={x} y={y} width={100} height={100} source={source}>
      { children }
    </texture>
  );
}