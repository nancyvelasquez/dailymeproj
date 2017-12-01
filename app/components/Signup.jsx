
import React, { Component } from 'react';

class Signup extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit() {
    event.preventDefault()
    console.log('hey this is happening')
  }

  render() {
    return (
      <div className="block">
        <div className="formBackground">
          <div className="formContainer">
            <h1 className="title">Sign up</h1>
            <form className="field" onSubmit={this.handleSubmit}>
              <label className="label">First Name</label>
              <input
                className="input"
                type="text"
                placeholder="Enter first name"
              /* value={this.state.email} */
              /* onChange={this.handleEmailChange} */
              />
              <label className="label">Last Name</label>
              <input
                className="input"
                type="text"
                placeholder="Enter last name"
              /* value={this.state.email} */
              /* onChange={this.handleEmailChange} */
              />
              <label className="label">Email</label>
              <input
                className="input"
                type="password"
                placeholder="Enter email"
              /* value={this.state.password} */
              /* onChange={this.handlePasswordChange} */
              />
              <label className="label">Password</label>
              <input
                className="input"
                type="password"
                placeholder="Enter password"
                value={this.state.password}
              /* onChange={this.handlePasswordChange} */
              />
              <div className="control">
                <a className="button is-info signupButton">Sign up</a>
                <br></br>
                <a className="button is-danger signupButton"><i className="fa fa-google" aria-hidden="true"></i>   |   Sign up with Google</a>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default Signup;
