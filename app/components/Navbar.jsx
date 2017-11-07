import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="navbar is-transparent is-centered">
      <div className="navbar-brand">
        <NavLink className="navbar-item" to='/'>
          <div className="navbar-item">
            <img src="./images/medailylogo.png" alt="MeDaily: Know what you did when you did it" />
          </div>
        </NavLink>
        <div className="navbar-item">
          <NavLink className="navbar-item" to='/login'>
            <div className="button is-primary is-large">
              <span>Login</span>
            </div>
          </NavLink>
        </div>
      </div>
    </nav >
  );
}

export default Navbar;