import { fromJS } from 'immutable';

import { SET_TASK_INPUT, RESET_TASK_INPUT } from './constants';

export const initialState = fromJS({
  task: '',
});

function createTodoReducer(state = initialState, action) {
  switch (action.type) {
    case SET_TASK_INPUT:
      return state.set('task', action.payload);
    case RESET_TASK_INPUT:
      return state.set('task', '');
    default:
      return state;
  }
}

export default createTodoReducer;
