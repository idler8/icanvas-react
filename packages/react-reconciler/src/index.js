import ReactReconciler from 'react-reconciler';
import * as HostConfig from './host-config.js';
import getCanvasOffset from './getCanvasOffset';
import setWebCanvasOffset from './setWebCanvasOffset';
const MyRenderer = ReactReconciler(HostConfig);
export default {
  setWebCanvasOffset,
  getCanvasOffset,
  render(element, container) {
    if (!container._rootContainer) {
      container._rootContext = HostConfig.createInstance('canvas', {
        canvas: container,
        context: container.getContext('2d'),
      });
      container._rootContainer = MyRenderer.createContainer(container._rootContext);
    }
    MyRenderer.updateContainer(element, container._rootContainer);
  }
};