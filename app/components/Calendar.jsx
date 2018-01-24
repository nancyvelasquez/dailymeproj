
import React, { Component } from 'react';
import moment from 'moment'
import { connect } from 'react-redux'
import { dateEntry } from '../reducers/entry';

import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';

import { SingleDatePicker } from 'react-dates';

const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
];

class Calendar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: null,
      focused: null,
    };
  }

  render() {
    const today = new Date(),
      monthNum = today.getMonth(),
      weekdayNum = today.getDay(),
      date = !this.state.date ? `${monthNames[monthNum]} ${today.getDate()} ${today.getFullYear()}` : (moment(this.state.date).format('MMM DD YYYY'))
    
      this.props.submitDate(date)

    return (
      <div className="react-calendar">
        <SingleDatePicker
          id="date_input"
          showClearDate={true}
          date={this.state.date}
          focused={this.state.focused}
          onDateChange={(date) => { this.setState({ date }); }}
          onFocusChange={({ focused }) => { this.setState({ focused }) }}
          isOutsideRange={() => false}
        />
      </div>
    );
  }
}

// /* ----------------- REDUX ----------------- */

const mapDispatch = (dispatch) => ({
  submitDate(date) {
    dispatch(dateEntry(date))
  }
})

export default connect(null, mapDispatch)(Calendar)