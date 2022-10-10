import React from 'react';
import Reconciler from '@icanvas/react-reconciler';
import App from './App';
import './index.css';

const canvas = document.getElementById('root');
Reconciler(<App canvas={canvas} />, canvas);