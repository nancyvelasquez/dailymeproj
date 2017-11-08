
import React, { Component } from 'react';

function Login() {
  return (
    <div className="container">
      <div className="notification">
        <div className="form">
          <div className="field">
            <label className="label is-medium">Login</label>
            <div className="control has-icons-left has-icons-right">
              <input className="input is-medium" type="email" placeholder="Username" />
              <span className="icon is-small is-left">
                <i className="fa fa-envelope"></i>
              </span>
              <span className="icon is-small is-right">
                <i className="fa fa-check"></i>
              </span>
            </div>
          </div>

          <div className="field">
            <div className="control has-icons-left has-icons-right">
              <input className="input is-medium" type="email" placeholder="Password" />
              <span className="icon is-left">
                <i className="fa fa-envelope"></i>
              </span>
              <span className="icon is-right">
                <i className="fa fa-check"></i>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
