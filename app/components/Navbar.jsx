import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'

class Navbar extends Component {
  render() {
    return (
      <nav classNameName="navbar is-transparent is-centered">
        <div className="navbar-brand">
          <a className="navbar-item">
            <img src="./images/medailylogo.png" alt="MeDaily: Know what you did when you did it" />
          </a>
          <div className="navbar-item">
                <NavLink className="navbar-item" to='/login'>
                <a className="button is-primary is-large">
                  <span>Login</span>
                </a>
                </NavLink>
          </div>
        </div>
      </nav >
    );
  }
}

export default Navbar;


{/* 
    <section classNameName="hero navbar">        
<div classNameName="hero-body">
  <div classNameName="container has-text-centered">
    <h1 classNameName="title">
      MeDaily
    </h1>
    <h2 classNameName="subtitle">
      Remember what you did... when you did it
    </h2>
  </div>
</div>
</section> */}

// <button classNameName="button navbar-burger">
//               <span><a classNameName="button">Button</a></span>
//             </button>