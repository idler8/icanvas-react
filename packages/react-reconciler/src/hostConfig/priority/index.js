// 获取事件类型，判断任务优先级
import { DefaultEventPriority } from 'react-reconciler/constants';
export function getCurrentEventPriority() {
  return DefaultEventPriority;
}