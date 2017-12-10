import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import { NavLink } from 'react-router-dom'

// Require Editor JS files.
import 'froala-editor/js/froala_editor.pkgd.min.js';

// Require Editor CSS files.
import 'froala-editor/css/froala_style.min.css';
import 'froala-editor/css/froala_editor.pkgd.min.css';

// Require Font Awesome.
import 'font-awesome/css/font-awesome.css';

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
          <FroalaEditor tag='textarea'/> />
        </div>
      </section>
    );
  }
}


export default PaperInput