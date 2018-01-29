import React from 'react';
import ReactDOM from 'react-dom';
import { NavLink } from 'react-router-dom';
import { startLogout } from '../actions/auth';
import { connect } from 'react-redux';

export const Header = ({ startLogout }) => (
  <header>
    <h1>Expensify</h1>
    <nav>
      <NavLink to="/dashboard" exact activeClassName="is-active">
        Dashboard
      </NavLink>
      <NavLink to="/create" activeClassName="is-active">
        Create Expense
      </NavLink>
      <button onClick={startLogout}>Logout</button>
    </nav>
  </header>
);

const mapDispatchToProps = (dispatch) => ({
  startLogout: () => dispatch(startLogout())
});

export default connect(undefined, mapDispatchToProps)(Header);
