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
  }

  handleModelChange(model) {
    this.setState({
      model: model
    })
  }

  render() {
    return (
      <section>
        <div className="container">
          <FroalaEditor tag="textarea" entry={this.state.model} config={this.config} onModelChange={this.handleModelChange} />
          <div className="paperinput-entry">
            <button className="button is-primary is-medium" onClick={() => this.props.submitModel(this.state.model, this.props.user.id)}>
              <span>Save</span>
            </button>
          </div>
        </div>
      </section>
    );
  }
}

// /* ----------------- REDUX ----------------- */

const mapState = (state) => ({
  user: state.user
})

const mapDispatch = (dispatch, ownProps) => ({
  submitModel(entryText, id) {
    dispatch(entryPost(entryText, id))
  }
})

export default connect(mapState, mapDispatch)(PaperInput)