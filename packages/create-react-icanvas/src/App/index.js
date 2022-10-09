import React from 'react';
import { Config } from 'apiHooks/useCanvasOptions';
import Battle from './Battle';
export default function App({ options }) {
  return (
    <Config value={options}>
      <Battle />
    </Config>
  );
}