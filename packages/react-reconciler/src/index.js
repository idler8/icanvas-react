import ReactReconciler from 'react-reconciler';
import * as HostConfig from './hostConfig';
// import * as HostConfigSource from './hostConfig';
// const filter = [ 'scheduleMicrotask', 'shouldSetTextContent', 'getRootHostContext', 'getChildHostContext' ];
// const HostConfig = Object.keys(HostConfigSource).reduce((o, k) => {
//   const value = filter.indexOf(k) === -1 && typeof HostConfigSource[k] === 'function' ? function(...args) {
//     console.log(k, ...args);
//     const res = HostConfigSource[k](...args);
//     if (k === 'resetAfterCommit') console.log('-----------------');
//     return res;
//   } : HostConfigSource[k];
//   return { ...o, [k]: value };
// }, {});
const MyRenderer = ReactReconciler(HostConfig);
export default function render(element, container) {
  if (!container._rootContainer) {
    container._rootContext = HostConfig.createInstance('canvas', {
      canvas: container,
      context: container.getContext('2d'),
    });
    container._rootContainer = MyRenderer.createContainer(container._rootContext);
  }
  MyRenderer.updateContainer(element, container._rootContainer);
}