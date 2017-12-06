import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'

class Navbar extends Component {
  render() {
    console.log('user', this.props.user)
    return (
      <nav className="navbar is-transparent">
        <div className="navbar-brand">
          <NavLink className="navbar-item" to="/">
            <div className="navbar-item">
              <img src="./images/ledailymoi_transp.png" alt="MeDaily: Know what you did when you did it" />
            </div>
          </NavLink>
        </div>
        <div className="navbar-end">
          <div className="navbar-item">
            <NavLink className="navbar-item" to="/login">
              <div className="button is-primary is-medium">
                <span>Login</span>
              </div>
            </NavLink>
          </div>
        </div>
      </nav>
    );
  }
}

/* -----------------    CONTAINER     ------------------ */

import { connect } from 'react-redux'

const mapState = (state) => ({
  user: state.user
})

export default connect(mapState, null)(Navbar)
