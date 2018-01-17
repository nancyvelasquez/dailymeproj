import React, { Component } from 'react';
// import { connect } from 'react-redux'
// import { getUser, auth } from '../reducers/user';

const Login = () => {
  return (
    <div className="block">
      <div className="formBackground">
        <div className="formContainer">
          <h1 className="title">Welcome back!</h1>
          <a href="/auth/google" className="button is-danger signupButton"><i className="fa fa-google" aria-hidden="true"></i>   |   Log in with Google</a>
        </div>
      </div>
    </div>
  )
}

export default Login;

// /* ----------------- REDUX ----------------- */

// export default connect(null, mapDispatch)(Signup)