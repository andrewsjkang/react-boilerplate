import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectCreateTask = state => state.get('createtodo', initialState);

const makeSelectCreateTask = () =>
  createSelector(selectCreateTask, taskState => taskState.get('task'));

export { selectCreateTask, makeSelectCreateTask };
