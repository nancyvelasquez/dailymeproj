import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import PaperInput from './PaperInput'
import Calendar from './Calendar'

class UserHome extends Component {
  render() {
    return (
      <section className="hero is-info is-large" >
        <div className="hero-body heroImage" id="userhome-image">
          <div className="container calendar">
            <span id="userhome-calendar">Go to <Calendar /></span>
          </div>
          <br></br>
          <section>
          <PaperInput />
          </section>
        </div>
      </section>
    )
  }
}

export default UserHome