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
      entry: {}
    }
  }

  componentDidMount() {
    this.props.getSavedEntry(this.props.date, this.props.id)
  }

  shouldComponentUpdate(nextProps) {
    const diffState = this.state.entry !== nextProps.entry;
    return diffState;
  }

  render() {
    console.log('.entry', this.props)
    return (
      <section>
        <div className="container previousEntry">
          <div dangerouslySetInnerHTML={{ __html: this.props.entry.entryLog }} />   
        </div>
      </section>
    )
  }
}

/* ----------------- REDUX ----------------- */

const mapState = (state) => ({
  entry: state.entry
})

const mapDispatch = (dispatch) => ({
  getSavedEntry(date, id) {
    return dispatch(getSavedEntry(date, id))
  }
})

export default connect(mapState, mapDispatch)(ShowPreviousEntry)