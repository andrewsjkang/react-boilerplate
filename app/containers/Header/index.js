import React from 'react';
import { Link } from 'react-router-dom';

/* eslint-disable react/prefer-stateless-function */
/* eslint-disable jsx-a11y/anchor-is-valid */
class Header extends React.PureComponent {
  render() {
    return (
      <div>
        <Link to="/">
          <h1>Todo List</h1>
        </Link>
        <div>
          <Link to="/">My Todo List</Link>
          <Link to="/create">Create Todo</Link>
        </div>
      </div>
    );
  }
}

export default Header;
