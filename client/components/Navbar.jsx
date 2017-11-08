import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="navbar is-transparent">
      <div className="navbar-brand">
        <NavLink className="navbar-item" to='/'>
          <div className="navbar-item">
            <img src="./images/medailylogo.png" alt="MeDaily: Know what you did when you did it" />
          </div>
        </NavLink>
        <span className="is-divider"></span>
      </div>
      <div className="navbar-end">
        <div className="navbar-item">
          <p className="control">
            <NavLink className="navbar-item" to="/login">
              <div className="button is-primary is-medium">
                <span>Login</span>
              </div>
            </NavLink>
          </p>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

{/* 
// <nav classNameName="navbar is-transparent is-centered">
    //   <div classNameName="navbar-brand">
    //     <NavLink classNameName="navbar-item" to='/'>
    //       <div classNameName="navbar-item">
    //         <img src="./images/medailylogo.png" alt="MeDaily: Know what you did when you did it" />
    //       </div>
    //     </NavLink>
    //     <div classNameName="navbar-item">
    //       <NavLink classNameName="navbar-item" to='/login'>
    //         <div classNameName="button is-primary is-large">
    //           <span>Login</span>
    //         </div>
    //       </NavLink>
    //     </div>
    //   </div>
    // </nav > */}