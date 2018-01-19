import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { entryPost } from '../reducers/entry';

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
    this.setState({
      model: model
    })
  }

  // submitModel () {
  //   this.props.entryPost(this.state.model)
  // }

  render() {
    return (
      <section>
        <div className="container">
          <FroalaEditor tag="textarea" entry={this.state.model} config={this.config} onModelChange={this.handleModelChange}/>
        </div>
        <div className="paperinput-entry">
          <button className="button is-primary is-medium" onClick={this.submitEntry}>
            <span onClick={(evt) => submitModel(this.state.model)}>Save</span>
          </button>
        </div>
      </section>
    );
  }
}

// /* ----------------- REDUX ----------------- */

const mapDispatch = (dispatch) => ({
  submitModel () {
    console.log('this is the entry')
    dispatch(entryPost(this.state.model))
  }
})

export default connect(null, mapDispatch)(PaperInput)