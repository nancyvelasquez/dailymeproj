import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import { NavLink } from 'react-router-dom'

import FroalaEditor from 'react-froala-wysiwyg';

class PaperInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      model: ''
    }
    this.handleModelChange = this.handleModelChange.bind(this)
    this.submitModel = this.submitModel.bind(this)
  }

  handleModelChange (model) {
    console.log('this is the model', model)
    this.setState({
      model: model
    })
  }

  submitModel (evt) {
    console.log('this is being submitted', this.state.model)
  }

  render() {
    return (
      <section>
        <div className="container">
          <FroalaEditor tag="textarea" entry={this.state.model} config={this.config} onModelChange={this.handleModelChange}/>
        </div>
        <div className="paperinput-entry">
        {/* <NavLink to="/signup"> */}
          <button className="button is-primary is-medium" onClick={this.submitEntry}>
            <span onClick={() => this.submitModel()}>Submit</span>
          </button>
          {/* <script>$('div#froala-editor').froalaEditor('html.get')</script> */}
        {/* </NavLink> */}
        </div>
      </section>
    );
  }
}

export default PaperInput