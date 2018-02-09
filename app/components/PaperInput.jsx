import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Link, NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import ShowPreviousEntry from './ShowPreviousEntry'
import { entryPost } from '../reducers/entry'

import FroalaEditor from 'react-froala-wysiwyg'

class PaperInput extends Component {
  constructor(props) {
    super(props)
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

  render() {
    const isToday = this.props.date === (new Date().toJSON()).slice(0, 10)

    return (
      <section>
        <div className="container">
          {isToday ? (
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
          ) : <ShowPreviousEntry date={this.props.date} id={this.props.user.id} />
          }
        </div>
      </section>
    )
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