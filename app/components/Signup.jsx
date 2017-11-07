
import React, { Component } from 'react';

function Signup () {
  return (
    <div className="form-container">
    <div className="field is-horizontal right-space">
    <div className="field-label is-normal">
      <label className="label">Full Name</label>
    </div>
    <div className="field-body">
      <div className="field">
        <p className="control is-expanded has-icons-left">
          <input className="input" type="text" placeholder="Name"></input>
          <span className="icon is-small is-left">
            <i className="fa fa-user"></i>
          </span>
        </p>
      </div>
      <div className="field">
        <p className="control is-expanded has-icons-left has-icons-right">
          <input className="input" type="email" placeholder="Last Name"></input>
          <span className="icon is-small is-left">
            <i className="fa fa-user"></i>
          </span>
        </p>
      </div>
    </div>
  </div>
  
  <div className="field is-horizontal right-space">
    <div className="field-label is-normal">
      <label className="label">Email</label>
    </div>
    <div className="field-body">
      <div className="field">
        <div className="control">
          <input className="input" type="text" placeholder=""></input>
        </div>
      </div>
    </div>
  </div>
  
  <div className="field is-horizontal">
    <div className="field-label">
    </div>
    <div className="field-body">
      <div className="field">
        <div className="control">
          <button className="button is-primary">
            Submit
          </button>
        </div>
      </div>
    </div>
  </div>
  </div>
  )
}

export default Signup;
