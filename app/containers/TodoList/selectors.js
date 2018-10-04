import { createSelector } from 'reselect';
import { todoListInitialState } from './reducer';

const selectTodoList = state => state.get('todolist', todoListInitialState);

const makeSelectTodoList = () =>
  createSelector(selectTodoList, todolistState =>
    todolistState.get('todos').toJS(),
  );

export { selectTodoList, makeSelectTodoList };
