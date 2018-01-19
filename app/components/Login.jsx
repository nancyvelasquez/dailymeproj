import React, { Component } from 'react';

const Login = () => {
  return (
    <div className="block">
      <div className="signup-background">
        <div className="signup-container">
          <h1 className="title">Welcome back!</h1>
          <a href="/auth/google" className="button is-danger signup-button"><i className="fa fa-google" aria-hidden="true"></i>   |   Log in with Google</a>
        </div>
      </div>
    </div>
  )
}

export default Login;

// /* ----------------- REDUX ----------------- */

// export default connect(null, mapDispatch)(Signup)