import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import Benefits from './Benefits'
import Navbar from './Navbar'

const Home = () => {
  console.log('this.props',this.props)
    return (
      <section className="hero is-info is-large" >
        <div className="hero-body heroImage" id="bigImage">
          <div className="container">
            <h1 className="title homepage">
              Know what you did, when you did it
          </h1>
            <h2 className="subtitle homepageSub">
              Keep track of your life, without the hassle of notebooks, pencil warts, or excel spreadsheets.
          </h2>
          </div>
          <Benefits />
          <div className="container signupButton">
            <NavLink className="centeredButton" to="/signup">
              <div className="button is-primary is-medium">
                <span>Get Started</span>
              </div>
            </NavLink>
          </div>
        </div>
      </section>
    );
}

export default Home