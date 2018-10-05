import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { array, func, bool } from 'prop-types';
import { createStructuredSelector } from 'reselect';

import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import { makeSelectTodoList, makeSelectLoading } from './selectors';
import { loadTodos } from './actions';
import reducer from './reducer';
import saga from './saga';
import TodoItem from '../../components/TodoItem/index';
import Spinner from '../../components/Spinner/index';
import List from './style/List';

export class TodoList extends React.PureComponent {
  componentDidMount() {
    this.props.loadTodoState();
  }

  isLoading() {
    if (this.props.loading) return <Spinner />;
    return this.props.todos.map(todo => <TodoItem key={todo.id} todo={todo} />);
  }

  render() {
    return (
      <List>
        <h1>Todo List</h1>
        {this.isLoading()}
      </List>
    );
  }
}

TodoList.propTypes = {
  loading: bool,
  todos: array,
  loadTodoState: func,
};

const mapStateToProps = createStructuredSelector({
  loading: makeSelectLoading(),
  todos: makeSelectTodoList(),
});

const mapDispatchToProps = dispatch => ({
  loadTodoState() {
    dispatch(loadTodos());
  },
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);
const withReducer = injectReducer({ key: 'todolist', reducer });
const withSaga = injectSaga({ key: 'todolist', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(TodoList);
