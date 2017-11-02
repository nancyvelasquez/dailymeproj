import React, { Component } from 'react';
import Benefits from './Benefits'

class Navbar extends Component {
  render() {
    return (
      <nav classNameName="navbar is-transparent is-centered">
        <div className="navbar-brand">
          <a className="navbar-item">
            <img src="./images/medailylogo.png" alt="MeDaily: Know what you did when you did it"/>
          </a>
          <div className="navbar-item">
            <div classNameName="field is-grouped">
              <p className="control">
                <a className="button is-primary">
                  <span>Login</span>
                </a>
              </p>
            </div>
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