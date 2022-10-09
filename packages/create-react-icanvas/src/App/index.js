import React, { useEffect, useState } from 'react';
import { Image } from '@icanvas/react-components';
export default function App({ options }) {
  const [ state, setState ] = useState(0);
  useEffect(() => {
    const a = setInterval(() => {
      setState((e) => e > 3 ? e : console.log('---------------- App ---------------') || e + 1);
    }, 1000);
    return () => clearInterval(a);
  }, [ ]);
  console.log('__child', state);
  return (
    <rect width={options.width} height={options.height} style={{ fillStyle: 'green' }} drawType="fill">
      <rect x={state * 100} y="2" width="100" height="200">
        <fill style={{ fillStyle: 'red' }} />
        <clip>
          <Image x="150" y="100" width="100" height="200" src="/favicon.ico" />
          { state === 1 && <Image x="50" y="100" width="100" height="200" src="/favicon.ico" /> }
          <Image x="350" y="50" width="100" height="200" src="/favicon.ico" />
        </clip>
      </rect>
      <Image x="350" y="500" width="100" height="200" src="/favicon.ico" />
    </rect>
  );
}