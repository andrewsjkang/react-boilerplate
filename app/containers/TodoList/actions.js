import { LOAD_TODOS, LOAD_TODOS_SUCCESS } from './constants';

export function loadTodos() {
  return { type: LOAD_TODOS };
}

export function updateTodoList(newList) {
  return { type: LOAD_TODOS_SUCCESS, payload: newList };
}
