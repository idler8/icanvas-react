import * as renderFunctions from './renderFunctions';
function drawChildren(ctx) {
  this.children.forEach((child) => {
    console.log('__child', child);
    ctx.save();
    child._drawTransform?.(ctx);
    child._drawElement?.(ctx);
    child._drawChildren(ctx);
    ctx.restore();
  });
}
// eslint-disable-next-line no-unused-vars
export default function createInstance(type, props, rootContainer, hostContext, internalHandle) {
  console.log('createInstance', type, props, internalHandle);
  // TODO 设定监听
  return {
    type,
    props,
    children: [],
    parentNode: null,
    _drawElement: renderFunctions[type],
    _drawChildren: drawChildren
  };
}