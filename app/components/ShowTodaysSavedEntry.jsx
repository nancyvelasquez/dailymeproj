import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Link, NavLink } from 'react-router-dom'
import { connect } from 'react-redux'

import ShowPreviousEntry from './ShowPreviousEntry'
import { entryPost } from '../reducers/entry'

import FroalaEditor from 'react-froala-wysiwyg'
import Calendar from './Calendar'

class ShowTodaysSavedEntry extends Component {
  constructor(props) {
    super(props)
    this.state = {
      model: '',
      date: ''
    }
    this.handleModelChange = this.handleModelChange.bind(this)
  }

  componentWillMount() {
    this.setState({ model: this.props.entry.entryLog })
  }

  handleModelChange(model) {
    this.setState({
      model: model
    })
  }

  render() {
    // const isToday = this.props.date === (new Date().toJSON()).slice(0, 10)
    // console.log('this props', this.props)

    return (
      <section className="hero is-info is-large" >
        <div className="hero-body heroImage" id="userhome-image">
          <div className="container calendar">
            <span id="userhome-calendar">Go to <Calendar /></span>
          </div>
          <br></br>
          <section>
            <div className="container">
              <div>
                <FroalaEditor tag="textarea" entry={this.state.model} config={this.config} onModelChange={this.handleModelChange} />
                <div className="paperinput-entry">
                  <Link to={`/notes/${this.props.date}`}>
                    <button className="button is-primary is-medium" onMouseUp={() => this.props.submitModel(this.state.model, this.props.user.id, this.props.date)}>
                      <span>Save</span>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
    )
  }
}

/* ----------------- REDUX ----------------- */

const mapState = (state) => ({
  user: state.user,
  date: state.entry.myDate,
  entry: state.entry,
})

const mapDispatch = (dispatch) => ({
  submitModel(entryText, id, date) {
    return dispatch(entryPost(entryText, id, date))
  }
})

export default connect(mapState, mapDispatch)(ShowTodaysSavedEntry)