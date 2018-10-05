import 'whatwg-fetch';
import { put, takeLatest } from 'redux-saga/effects';

import { LOAD_TODOS } from './constants';
import { updateTodoList } from './actions';

export function* getTodos() {
  const url = '/todolist';
  const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  };

  try {
    const todos = yield fetch(url, options)
      .then(response => {
        if (response.status === 200) {
          return response;
        }

        const error = new Error(response.statusText);
        error.response = response;
        throw error;
      })
      .then(response => response.json());
    /* eslint-disable no-console */
    yield put(updateTodoList(todos));
  } catch (err) {
    console.error(err);
  }
}

export default function* getTodoList() {
  yield takeLatest(LOAD_TODOS, getTodos);
}
