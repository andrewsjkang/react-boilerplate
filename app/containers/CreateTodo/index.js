import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { string, Function } from 'prop-types';
import { createStructuredSelector } from 'reselect';
import injectReducer from 'utils/injectReducer';
import { makeSelectTodoList } from './selectors';
import { setTaskInput, resetTaskInput } from './actions';
import reducer from './reducer';

// const CreateTodo = props => (
//   <div>
//     <h1>Create Todo</h1>
//     <div>{props.task}</div>
//     <form>
//       <input
//         onChange={props.handleTaskInputChange}
//         value={props.task}
//         type="text"
//         placeholder="Task"
//       />
//       <button type="submit">Submit</button>
//     </form>
//   </div>
// );

class CreateTodo extends React.PureComponent {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }
  /* eslint-disable no-console */
  handleSubmit(event) {
    event.preventDefault();
    console.log(this.props.task);
    this.props.handleTaskReset();
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
  handleTaskInputChange: Function,
  handleTaskReset: Function,
};

const mapStateToProps = createStructuredSelector({
  task: makeSelectTodoList(),
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

// export default CreateTodo;
