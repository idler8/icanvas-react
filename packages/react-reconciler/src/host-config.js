/* eslint-disable no-unused-vars */

// 变异模式
export const supportsMutation = true;
// 持久模式
// export const supportsPersistence = true;
// 生成普通节点
export { default as createInstance } from './createInstance';
// 生成文本节点
export function createTextInstance(text, rootContainer, hostContext, internalHandle) {
  return text;
}
// 将子节点首次挂载到父节点
export function appendInitialChild(parentInstance, child) {
  if (typeof child === 'string') {
    // Noop for string children of Text (eg <Text>{'foo'}{'bar'}</Text>)
    throw new Error('Text children should already be flattened.');
  }
  parentInstance.children.push(child);
  child.parentNode = parentInstance;
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
// 检查是否需要生成一个文本节点
export function shouldSetTextContent(type, props) {
  return false;
}
// 全局上下文
const NO_CONTEXT = {};
export function getRootHostContext(rootContainer) {
  return NO_CONTEXT;
}
// 当前上下文
export function getChildHostContext(parentHostContext, type, rootContainer) {
  return NO_CONTEXT;
}
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
// 挂载附加内容
export function preparePortalMount(portalInstance) {
  // noop
}
// setTimeout方法实例
export const scheduleTimeout = setTimeout;
// clearTimeout方法实例
export const cancelTimeout = clearTimeout;
// 一个无效的Timeout标志
export const noTimeout = -1;
// 是否支持微服务
export const supportsMicrotasks = true;
// 微服务队列函数
export const scheduleMicrotask = queueMicrotask;
// 是主要渲染器
export const isPrimaryRenderer = true;
// 获取事件类型，判断任务优先级
import { DefaultEventPriority } from 'react-reconciler/constants';
export function getCurrentEventPriority() {
  return DefaultEventPriority;
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
export function resetTextContent(instance) {
  // Noop
}
// 提交节点内的新文本
export function commitTextUpdate(textInstance, prevText, nextText) {
  // Noop
}
// 提交节点挂载
export function commitMount(instance, type, props, internalHandle) {
  // Noop
}
// 提交节点更新
export function commitUpdate(instance, updatePayload, type, prevProps, nextProps, internalHandle) {
  instance.props = nextProps;
}
// 隐藏节点
export function hideInstance(instance) {
  instance.hide();
}
// 隐藏文本节点
export function hideTextInstance(textInstance) {
  textInstance.hide();
}
// 显示节点
export function unhideInstance(instance, props) {
  if (props.visible == null || props.visible) {
    instance.show();
  }
}
// 显示文本节点
export function unhideTextInstance(textInstance, text) {
  // Noop
}
// 清空所有节点
export function clearContainer(container) {
  // TODO Implement this
}

export function getInstanceFromNode(node) {
  throw new Error('Not implemented.');
}

export function beforeActiveInstanceBlur(internalInstanceHandle) {
  // noop
}

export function afterActiveInstanceBlur() {
  // noop
}

export function detachDeletedInstance(node) {
  // noop
}

export function requestPostPaintCallback(callback) {
  // noop
}