import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import { NavLink } from 'react-router-dom'

import FroalaEditor from 'react-froala-wysiwyg';

class PaperInput extends Component {
  constructor() {
    super()
    this.state = {
      paperBackground: 'whitePaper'
    };
  }

  render() {
    const sectionClassName = `section ${this.state.paperBackground}`
    return (
      <section className={sectionClassName}>
        <div className="container">
          <FroalaEditor tag='textarea' config={this.config} />
        </div>
      </section>
    );
  }
}

export default PaperInput