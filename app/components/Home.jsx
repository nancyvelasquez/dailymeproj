import React, { Component } from 'react';
import Benefits from './Benefits'

class Home extends Component {
  render() {
    return (
      <section className="hero">
        <Benefits />
        <div className="container">
          <div className="notification">
            <a className="button is-large centeredElements">Get Started</a>
          </div>
        </div>
      </section>
    );
  }
}

export default Home;
