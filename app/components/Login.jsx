
import React, { Component } from 'react';

function Login() {
  return (
    <div className="block">
        <div className="formBackground">
          <div className="formContainer">
            <h1 className="title">Login</h1>
            <form className="field">
              <label className="label">Name</label>
              <input
                className="input"
                type="text"
                placeholder="Enter email"
                // value={this.state.email}
              /* onChange={this.handleEmailChange} */
              />
              <label className="label">Password</label>
              <input
                className="input"
                type="password"
                placeholder="Enter password"
                // value={this.state.password}
              /* onChange={this.handlePasswordChange} */
              />
              <div className="control">
                <button className="button is-link">Signup</button>
              </div>
            </form>
          </div>
        </div>
      </div>
  );
}

export default Login;
