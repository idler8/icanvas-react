/* eslint-disable no-unused-vars */

import * as renderFunctions from './renderFunctions';
function drawChildren(ctx) {
  this.children.forEach((child) => {
    ctx.save();
    child._drawTransform?.(ctx);
    child._drawElement?.(ctx);
    child._drawChildren(ctx);
    ctx.restore();
  });
}
// 生成普通节点
export function createInstance(type, props, rootContainer, hostContext, internalHandle) {
  console.log('createInstance', type, props);
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
// 检查是否需要生成一个文本节点
export function shouldSetTextContent(type, props) {
  return false;
}
// 生成文本节点
export function createTextInstance(text, rootContainer, hostContext, internalHandle) {
  return text;
}