import React, { Component } from 'react'
// import { connect } from 'react-redux'
// import { getUser, auth } from '../reducers/user'

const Signup = () => {
  return (
    <div className="block">
      <div className="signup-background">
        <div className="signup-container">
          <h1 className="title">Sign up</h1>
          <a href="/auth/google" className="button is-danger signup-button"><i className="fa fa-google" aria-hidden="true"></i>   |   Sign up with Google</a>
        </div>
      </div>
    </div>
  )
}

export default Signup

// /* ----------------- REDUX ----------------- */

// export default connect(null, mapDispatch)(Signup)