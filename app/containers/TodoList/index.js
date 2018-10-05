import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { array } from 'prop-types';
import { createStructuredSelector } from 'reselect';
import 'whatwg-fetch';

import injectReducer from 'utils/injectReducer';
import { makeSelectTodoList } from './selectors';
import reducer from './reducer';
import TodoItem from '../../components/TodoItem/index';

class TodoList extends React.PureComponent {
  componentDidMount() {
    this.getList();
  }

  getList() {
    fetch('/todolist', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    }).then(
      response => {
        const data = response.text();
        /* eslint-disable no-console */
        console.log(data);
      },
      error => {
        console.error(error);
      },
    );
  }

  render() {
    return (
      <div>
        <h1>Todo List</h1>
        {this.props.todos.map(todo => <TodoItem key={todo.id} todo={todo} />)}
      </div>
    );
  }
}

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
