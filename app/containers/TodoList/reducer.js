// Entries reducer

import { fromJS } from 'immutable';

export const todoListInitialState = fromJS({
  todos: [
    {
      id: 1,
      date: '2018-09-28',
      task: 'first message',
    },
    {
      id: 2,
      date: '2018-09-29',
      task: 'second message',
    },
  ],
});

function todoListReducer(state = todoListInitialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}

export default todoListReducer;
