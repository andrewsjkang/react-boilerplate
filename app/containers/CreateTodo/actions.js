import { SET_TASK_INPUT, RESET_TASK_INPUT } from './constants';

export function setTaskInput(taskInput) {
  return { type: SET_TASK_INPUT, payload: taskInput };
}

export function resetTaskInput() {
  return { type: RESET_TASK_INPUT, payload: '' };
}
