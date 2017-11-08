import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import Benefits from './Benefits'
import Signup from './Signup'

function Home() {
  return (
    <section className="hero">
      <Benefits />
      <div className="container">
        <div className="notification">
          <NavLink className="navbar-item" to='/signup'>
            <div className="button is-large centeredElements">Get Started</div>
          </NavLink>
        </div>
      </div>
    </section>
  );
}

export default Home