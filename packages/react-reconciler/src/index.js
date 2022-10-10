import ReactReconciler from 'react-reconciler';
import * as HostConfig from './host-config.js';
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