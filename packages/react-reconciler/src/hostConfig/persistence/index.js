/* eslint-disable no-unused-vars */
export const supportsPersistence = true;
export function cloneInstance(instance, updatePayload, type, oldProps, newProps, internalInstanceHandle, keepChildren, recyclableInstance) {
  instance.props = newProps;
  return instance;
}
export function appendInitialChild(parentInstance, child) {
  console.log('appendIntialChild', parentInstance, child);
}
export function createContainerChildSet(container) {
  const canvas = document.createElement('canvas');
  canvas.width = container.canvas.width;
  canvas.height = container.canvas.height;
  return { canvas, context: canvas.getContext('2d') };
}
export function appendChildToContainerChildSet(children, child) {
  child._drawElement?.(children.context);
}
export function finalizeContainerChildren(container, newChildren) {

}
export function replaceContainerChildren(container, newChildren) {
  const context = container.context;
  const canvas = newChildren.canvas;
  context.clearRect(0, 0, canvas.width, canvas.height);
  context.drawImage(canvas, 0, 0, canvas.width, canvas.height);
}
export function cloneHiddenInstance() {}
export function cloneHiddenTextInstance() {}