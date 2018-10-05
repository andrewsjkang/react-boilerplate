import React from 'react';
import { Link } from 'react-router-dom';

import { HeaderStyle, HeaderButtons } from './style/index';

/* eslint-disable jsx-a11y/anchor-is-valid */
const Header = () => (
  <HeaderStyle>
    <Link to="/">
      <h1>Todo List</h1>
    </Link>
    <div>
      <Link to="/">
        <HeaderButtons>My Todo List</HeaderButtons>
      </Link>
      <Link to="/create">
        <HeaderButtons>Create Todo</HeaderButtons>
      </Link>
    </div>
  </HeaderStyle>
);

export default Header;
