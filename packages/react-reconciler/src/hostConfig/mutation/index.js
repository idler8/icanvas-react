/* eslint-disable no-unused-vars */
export const supportsMutation = true;
export function appendInitialChild(parentInstance, child) {
  if (typeof child === 'string') {
    // Noop for string children of Text (eg <Text>{'foo'}{'bar'}</Text>)
    throw new Error('Text children should already be flattened.');
  }
  parentInstance.children.push(child);
  child.parentNode = parentInstance;
}
// 添加元素到节点
export function appendChild(parentInstance, child) {
  if (typeof child === 'string' || typeof child === 'number') return;
  const brother = child.parentNode?.children;
  if (brother) brother.splice(brother.indexOf(child), 1);
  parentInstance.children.push(child);
  child.parentNode = parentInstance;
}
// 添加元素到根节点
export const appendChildToContainer = appendChild;
// 提交节点内的新文本
export function commitTextUpdate(textInstance, prevText, nextText) {}
// 提交节点挂载
export function commitMount(instance, type, props, internalHandle) {}
// 提交节点更新
export function commitUpdate(instance, updatePayload, type, prevProps, nextProps, internalHandle) {
  instance.props = nextProps;
}
// 添加元素到节点的某个子节点之前
export function insertBefore(parentInstance, child, beforeChild) {
  if (typeof child === 'string' || typeof child === 'number') return;
  if (child === beforeChild) {
    throw new Error('ReactART: Can not insert node before itself');
  }
  const brother = child.parentNode?.children;
  if (brother) brother.splice(brother.indexOf(child), 1);
  const newBrother = parentInstance.children;
  const index = newBrother.indexOf(beforeChild);
  newBrother.splice(index, 0, child);
  child.parentNode = parentInstance;
}
// 添加元素到根节点的某个子节点之前
export const insertInContainerBefore = insertBefore;
// 移除某个子节点
export function removeChild(parentInstance, child) {
  // TODO 移除事件
  const brother = child.parentNode?.children;
  if (brother) brother.splice(brother.indexOf(child), 1);
}
// 从根容器中移除某个子节点
export const removeChildFromContainer = removeChild;
// 重新渲染文本
export function resetTextContent(instance) {}
// 隐藏节点
export function hideInstance(instance) {}
// 隐藏文本节点
export function hideTextInstance(textInstance) {}
// 显示节点
export function unhideInstance(instance, props) {}
// 显示文本节点
export function unhideTextInstance(textInstance, text) {}
// 清空所有节点
export function clearContainer(container) {}