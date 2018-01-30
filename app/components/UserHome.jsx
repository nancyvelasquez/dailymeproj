import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import PaperInput from './PaperInput'
import Calendar from './Calendar'

var monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
]


class UserHome extends Component {
  constructor() {
    super()
    // const today = new Date(),
    //   monthNum = today.getMonth(),
    //   date = `${monthNames[monthNum]} ${today.getDate()}, ${today.getFullYear()}`
    // this.state = {
    //   date: date
    // }
  }

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