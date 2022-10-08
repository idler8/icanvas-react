import * as renderFunctions from './renderFunctions';
// eslint-disable-next-line no-unused-vars
export default function createInstance(type, props, rootContainer, hostContext, internalHandle) {
  console.log('createInstance', type, props, internalHandle);
  // TODO 设定监听
  const node = { type, props, children: [], parentNode: null };
  node.inject = (parentInstance) => {
    parentInstance.children.push(node);
    node.parentNode = parentInstance;
  };
  node.eject = () => {
    const brother = node.parentNode?.children;
    if (brother) brother.splice(brother.indexOf(node), 1);
    node.parentNode = null;
  };
  node.injectBefore = () => {
  };

  node._drawChildren = (ctx) => {
    node.children.forEach((child) => {
      console.log('__child', child);
      child._drawTransform?.(ctx);
      child._drawElement?.(ctx);
      child._drawChildren(ctx);
    });
  };
  node._drawElement = renderFunctions[type];
  return node;
}