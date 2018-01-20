
import React, { Component } from 'react';

import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';

import { SingleDatePicker } from 'react-dates';

class Calendar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: null,
      focused: null,
    };
  }

  render() {
    return (
      <div className="App">
        <SingleDatePicker
          id="date_input"
          date={this.state.date}
          focused={this.state.focused}
          onDateChange={(date) => { this.setState({ date }); }}
          onFocusChange={({ focused }) => { this.setState({ focused }); }}
          isOutsideRange={() => false}
        />
      </div>
    );
  }
}

export default Calendar;