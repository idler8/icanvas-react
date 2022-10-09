import React from 'react';
import { Config } from 'apiHooks/useCanvasOptions';
import Background from './Background';
import Enemy from './Enemy';
import Boom from './Boom';
import Player from './Player';
export default function App({ options }) {
  return (
    <Config value={options}>
      <Background>
        <Enemy />
        <Boom />
        <Player />
      </Background>
    </Config>
  );
}