import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import PaperInput from './PaperInput'

var monthNames = ["January", "February", "March", "April", "May", "June",
"July", "August", "September", "October", "November", "December"
];


class UserHome extends Component {
  constructor() {
    super()
    const today = new Date(),
      monthNum = today.getMonth(),
      date = `${monthNames[monthNum]} ${today.getDate()}, ${today.getFullYear()}`
    this.state = {
      date: date
    };
  }

  render() {
    return(
      <section className = "hero is-info is-large" >
        <div className="hero-body heroImage" id="userhome-image">
          <div className="container">
          <h1 className="title homepage">Today is { this.state.date }</h1>
          </div>
          <br></br>
          <PaperInput />
        </div>
      </section>
    );
  }
}


export default UserHome