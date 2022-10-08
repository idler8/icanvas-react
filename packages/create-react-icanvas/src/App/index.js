import React, { useEffect, useState } from 'react';
import { Image } from '@icanvas/react-components';
export default function App({ deploy }) {
  const [ state, setState ] = useState(0);
  useEffect(() => {
    if (deploy > 0) {
      const a = setInterval(() => {
        setState((e) => e > 3 ? e : console.log('---------------- App2onChange' + deploy + ' ---------------') || e + 1);
      }, deploy);
      return () => clearInterval(a);
    }
  }, [ deploy ]);
  console.log('__child', state);
  return (
    <shape x={state * 100} y="2" width="100" height="200" fillStyle="red">
      { state === 1 && <Image x="200" y="300" width="100" height="200" src="/favicon.ico" /> }
    </shape>
  );
}