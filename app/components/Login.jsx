
import React, { Component } from 'react';
import { connect } from 'react-redux'
import { me } from '../reducers/user';

class Login extends Component {

  render() {
    return (
      <div className="block">
        <div className="formBackground">
          <div className="formContainer">
            <h1 className="title">Log In</h1>
            <a onClick={ this.props.me } className="button is-danger signupButton"><i className="fa fa-google" aria-hidden="true"></i>   |  Log in with Google</a>
            <form
              className="field"
              onSubmit={event => {
                event.preventDefault()
                this.props.getUser(this.state)
            }}>
                <br></br>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

/* ----------------- REDUX ----------------- */

const mapDispatch = ({ me })

export default connect(null, mapDispatch)(Login)
