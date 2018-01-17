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
            {
              this.props.user.firstName ? (
                <div className="dropdown">
                  <span className="greeting">Hi, {this.props.user.firstName}!</span>
                  <span className="userPhoto dropbtn" style={{ backgroundImage: `url(${this.props.user.photo})` }}></span>
                  <div className="dropdown-content">
                    <a href="#">Link 1</a>
                    <a href="#">Link 2</a>
                    <a href="#">Link 3</a>
                  </div>
                </div>
              ) : (
                  <NavLink className="navbar-item" to="/login">
                    <h1><strong>login</strong></h1>
                  </NavLink>
                )
            }
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
