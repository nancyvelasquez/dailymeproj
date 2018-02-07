import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

class Navbar extends Component {
  render() {
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
                  <span className="navbar-greeting">Hi, {this.props.user.firstName}!</span>
                  <span className="navbar-user-photo dropbtn" style={{ backgroundImage: `url(${this.props.user.photo})` }}></span>
                  <div className="dropdown-content">
                    <a href="/notes/edit">Notes</a>
                    <a href="/log">Log</a>
                    <a href="/trends">Trends</a>
                    <a href="#">Settings</a>
                    <a href="/auth/logout">Logout</a>
                  </div>
                </div>
              ) : (
                  <NavLink className="navbar-item" to="/login">
                    <span className="navbar-greeting">Login</span>
                  </NavLink>
                )
            }
          </div>
        </div>
      </nav>
    )
  }
}

/* -----------------    CONTAINER     ------------------ */

import { connect } from 'react-redux'

const mapState = (state) => ({
  user: state.user
})

export default connect(mapState, null)(Navbar)
