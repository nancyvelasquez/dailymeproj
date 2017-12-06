
import React, { Component } from 'react';
import { connect } from 'react-redux'
import { me } from '../reducers/user';

class Signup extends Component {
  constructor(props) {
    super(props)
    this.state = {
      firstname: '',
      lastname: '',
      email: '',
      password: ''
    }
    this.handleInput = this.handleInput.bind(this)
  }

  handleInput(evt) {
    this.setState({ [evt.target.name]: evt.target.value })
  }

  render() {
    return (
      <div className="block">
        <div className="formBackground">
          <div className="formContainer">
            <h1 className="title">Sign up</h1>
            <a onClick={ this.props.me } className="button is-danger signupButton"><i className="fa fa-google" aria-hidden="true"></i>   |   Sign up with Google</a>
            <form
              className="field"
              onSubmit={event => {
                event.preventDefault()
                this.props.getUser(this.state)
            }}>
              <label className="label">First Name</label>
              <input
                name="firstname"
                className="input"
                type="firstname"
                placeholder="Enter first name"
                onChange={this.handleInput}
              />
              <label className="label">Last Name</label>
              <input
                name="lastname"
                className="input"
                type="lastname"
                placeholder="Enter last name"
                onChange={this.handleInput}
              />
              <label className="label">Email</label>
              <input
                name="email"
                className="input"
                type="email"
                placeholder="Enter email"
                onChange={this.handleInput}
              />
              <label className="label">Password</label>
              <input
                name="password"
                className="input"
                type="password"
                placeholder="Enter password"
                onChange={this.handleInput}
              />
                <br></br>
                <hr></hr>
                <button className="button is-info signupButton" type="submit">Sign up</button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

/* ----------------- REDUX ----------------- */

const mapDispatch = ({ me })

// const mapDispatch = dispatch => {
//   return {
    // getUser(state) {
    //   //evt.preventDefault()
    //   const firstname = state.firstname
    //   const lastname = state.lastname
    //   const email = state.email
    //   const password = state.password
    //   console.log(firstname, lastname, email, password)
    //   dispatch(auth(email, password, firstname, lastname))
    // }
//   }
// }

export default connect(null, mapDispatch)(Signup)
