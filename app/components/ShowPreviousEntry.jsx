import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { getSavedEntry } from '../reducers/entry'

import FroalaEditor from 'react-froala-wysiwyg'

class ShowPreviousEntry extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  componentDidMount() {
    this.props.getSavedEntry(this.props.date, this.props.id)
  }

  render() {
    return (
      <section>
        <div className="container">      
        </div>
      </section>
    )
  }
}

/* ----------------- REDUX ----------------- */

// const mapState = (state) => ({
//   user: state.user,
//   date: state.entry.myDate
// })

const mapDispatch = (dispatch) => ({
  getSavedEntry(date, id) {
    return dispatch(getSavedEntry(date, id))
  }
})

export default connect(null, mapDispatch)(ShowPreviousEntry)