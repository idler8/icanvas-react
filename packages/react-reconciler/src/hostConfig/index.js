/* eslint-disable no-unused-vars */
// 返回的ref
export function getPublicInstance(instance) {
  return instance;
}
// 渲染之前
export function prepareForCommit(containerInfo) {
  // Noop
  return null;
}
// 渲染之后
export function resetAfterCommit(containerInfo) {
  const { props } = containerInfo;
  const { canvas, context } = props;
  canvas.width = canvas.width + 0;
  containerInfo._drawChildren(context);
  // Noop
}
// 完成节点初始化渲染之前
export function finalizeInitialChildren(domElement, type, props) {
  return false;
}
// 检查判断是否要更新，返回更新附加参数或null不更新
const UPDATE_SIGNAL = {};
export function prepareUpdate(instance, type, oldProps, newProps, rootContainer, hostContext) {
  return UPDATE_SIGNAL;
}
// 是主要渲染器
export const isPrimaryRenderer = true;
// ???
// export const warnsIfNotActing = true;
// ???
export function getInstanceFromNode(node) {
  throw new Error('Not implemented.');
}
// ???
export function beforeActiveInstanceBlur(internalInstanceHandle) {}
// ???
export function afterActiveInstanceBlur() {}
// ???
export function detachDeletedInstance(node) {}
// ???
export function requestPostPaintCallback(callback) {}
// ???
export function prepareRendererToRender(callback) {}
// ???
export function resetRendererAfterRender(callback) {}

export * from './instance';
export * from './priority';
export * from './context';
export * from './timeout';
export * from './microtasks';
export * from './mutation';