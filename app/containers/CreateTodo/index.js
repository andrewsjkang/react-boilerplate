import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { string, func, object } from 'prop-types';
import { createStructuredSelector } from 'reselect';
import 'whatwg-fetch';

import injectReducer from 'utils/injectReducer';
import { makeSelectCreateTask } from './selectors';
import { setTaskInput, resetTaskInput } from './actions';
import reducer from './reducer';

class CreateTodo extends React.PureComponent {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const data = {
      task: this.props.task,
    };
    this.postTodo(data);
    this.props.handleTaskReset();
  }

  postTodo(data) {
    fetch('/todolist', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(() => {
        this.props.history.push('/');
      })
      /* eslint-disable no-console */
      .catch(error => console.error(error));
  }

  render() {
    return (
      <div>
        <h1>Create Todo</h1>
        <div>{this.props.task}</div>
        <form onSubmit={this.handleSubmit}>
          <input
            onChange={this.props.handleTaskInputChange}
            value={this.props.task}
            type="text"
            placeholder="Task"
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

CreateTodo.propTypes = {
  task: string,
  handleTaskInputChange: func,
  handleTaskReset: func,
  history: object,
};

const mapStateToProps = createStructuredSelector({
  task: makeSelectCreateTask(),
});

const mapDispatchToProps = dispatch => ({
  handleTaskInputChange(event) {
    dispatch(setTaskInput(event.target.value));
  },
  handleTaskReset() {
    dispatch(resetTaskInput());
  },
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);
const withReducer = injectReducer({ key: 'createtodo', reducer });

export default compose(
  withReducer,
  withConnect,
)(CreateTodo);
