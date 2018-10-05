// Entries reducer

import { fromJS } from 'immutable';
import { UPDATE_TODO_LIST } from './constants';

export const todoListInitialState = fromJS({
  todos: [],
});

function todoListReducer(state = todoListInitialState, action) {
  switch (action.type) {
    case UPDATE_TODO_LIST:
      return state.set('todos', fromJS(action.payload));
    default:
      return state;
  }
}

export default todoListReducer;
