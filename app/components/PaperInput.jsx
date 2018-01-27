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
      model: '', 
      date: ''
    }
    this.handleModelChange = this.handleModelChange.bind(this)
  }

  handleModelChange(model) {
    this.setState({
      model: model
    })
  }

  componentDidMount() {
    this.setState({ date: this.props.date })
  }

  render() {
    console.log('tihs.props.date', this.props.date)
    return (
      <section>
        <div className="container">
          <FroalaEditor tag="textarea" entry={this.state.model} config={this.config} onModelChange={this.handleModelChange} />
          <div className="paperinput-entry">
            <button className="button is-primary is-medium" onMouseUp={() => this.props.submitModel(this.state.model, this.props.user.id, this.state.date)}>
              <span>Save</span>
            </button>
          </div>
        </div>
      </section>
    );
  }
}

/* ----------------- REDUX ----------------- */

const mapState = (state) => ({
  user: state.user,
  date: state.entry.myDate
})

const mapDispatch = (dispatch) => ({
  submitModel(entryText, id, date) {
    return dispatch(entryPost(entryText, id, date))
  }
})

export default connect(mapState, mapDispatch)(PaperInput)