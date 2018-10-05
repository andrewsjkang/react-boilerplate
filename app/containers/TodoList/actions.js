import { UPDATE_TODO_LIST } from './constants';

export function updateTodoList(newList) {
  return { type: UPDATE_TODO_LIST, payload: newList };
}
