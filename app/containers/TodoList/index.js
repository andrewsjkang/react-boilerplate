import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { array } from 'prop-types';
import { createStructuredSelector } from 'reselect';
import injectReducer from 'utils/injectReducer';
import { makeSelectTodoList } from './selectors';
import reducer from './reducer';
import TodoItem from '../../components/TodoItem/index';

const TodoList = props => (
  <div>
    <h1>Todo List</h1>
    {props.todos.map(todo => <TodoItem key={todo.id} todo={todo} />)}
  </div>
);

TodoList.propTypes = {
  todos: array,
};

const mapStateToProps = createStructuredSelector({
  todos: makeSelectTodoList(),
});

const withConnect = connect(mapStateToProps);
const withReducer = injectReducer({ key: 'todolist', reducer });

export default compose(
  withReducer,
  withConnect,
)(TodoList);
