import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import { NavLink } from 'react-router-dom'

import FroalaEditor from 'react-froala-wysiwyg';

class PaperInput extends Component {
  constructor(props) {
    super(props);
    this.state = {}
    // this.submitEntry = this.submitEntry.bind(this);
  }

  // submitEntry(evt) {
  //   <script>
  //     $('div#froala-editor').froalaEditor('html.get');
  //   </script>
  // }

  render() {
    return (
      <section>
        <div className="container">
          <FroalaEditor tag="textarea" config={this.config} />
        </div>
        <NavLink to="/signup">
          <button className="button is-primary is-small" onClick={this.submitEntry}>
            <span>Submit</span>
          </button>
          {/* <script>$('div#froala-editor').froalaEditor('html.get')</script> */}
        </NavLink>
      </section>
    );
  }
}

export default PaperInput