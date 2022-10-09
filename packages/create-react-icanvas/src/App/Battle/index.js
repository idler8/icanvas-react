import React from 'react';
import Background from './Background';
import Enemy from './Enemy';
import Boom from './Boom';
import Player from './Player';
export default function Component() {
  return (
    <Background>
      <Enemy />
      <Boom />
      <Player onTouchStart={() => {}} />
    </Background>
  );
}