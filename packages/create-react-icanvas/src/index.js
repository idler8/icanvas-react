import React from 'react';
import Reconciler from '@icanvas/react-reconciler';
import App from './App';

const canvas = document.getElementById('root');
const options = Reconciler.getCanvasOffset(window.innerWidth, window.innerHeight);
Reconciler.setWebCanvasOffset(canvas, options);

Reconciler.render(<App deploy={1000} />, canvas);