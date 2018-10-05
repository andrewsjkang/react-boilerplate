import React from 'react';
import { shape, string, number } from 'prop-types';

const TodoItem = props => (
  <div>
    <h2>{props.todo.task}</h2>
  </div>
);

TodoItem.propTypes = {
  todo: shape({
    id: number,
    task: string,
  }),
};

export default TodoItem;
