import { fromJS } from 'immutable';
import { LOAD_TODOS, LOAD_TODOS_SUCCESS } from './constants';

export const todoListInitialState = fromJS({
  loading: false,
  todos: [],
});

function todoListReducer(state = todoListInitialState, action) {
  switch (action.type) {
    case LOAD_TODOS:
      return state.set('loading', true).set('todos', fromJS([]));
    case LOAD_TODOS_SUCCESS:
      return state.set('todos', fromJS(action.payload)).set('loading', false);
    default:
      return state;
  }
}

export default todoListReducer;
