import React, {Component} from 'react';
import {PropTypes} from 'prop-types';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class Bookings extends Component {
  state = {
    hackerName: '',
    hackerDate: ''
  }
  handleGuestInfo = (event) => {
    this.setState({
      hackerName: event.target.value})
  }
  handleDateInfo = (event) => {
    this.setState({
      hackerDate: event.target.value})
  }
  getMealsPlan = (e) => {
    const hackerNameList = this.state.hackerName.split("\n")
    const hackerDateList = this.state.hackerDate.split("\n")
    const dateValidation = /^(19|20)\d\d[- /.](0[1-9]|1[012])[- /.](0[1-9]|[12][0-9]|3[01])$/
    let hackerProps = {
      hackerList: hackerNameList,
      dates: {}
    }
    for (let hackerIndex = 0; hackerIndex < hackerNameList.length; hackerIndex++) {
      const hacker = hackerNameList[hackerIndex];
      const dates = hackerDateList[hackerIndex].split(' to ')
      hackerProps.hacker = hacker
      hackerProps.dates[hackerIndex] = dates
      dates.forEach(date => {
        if (!dateValidation.test(date)) {
          hackerProps.error = `No menu generated for ${hacker}`
        }
      })
    }
    this.props.mealPlan(hackerProps)
  }

    render() {
      return (
        <div className="row">
          <TextField
            className="col-md-6"
            multiline
            rows="4"
            placeholder="Enter the hacker list (one hacker per line)"
            onChange={this.handleGuestInfo}
            value={this.state.hackerName}
          />
          <TextField
            className="col-md-6"
            multiline
            rows="4"
            placeholder="Enter the date range for each hacker's stay (one range per line)"
            onChange={this.handleDateInfo}
            value={this.state.hackerDate}
          />
          <Button variant="outlined" color="primary" className="block-center" onClick={this.getMealsPlan}>Get Meals Schedule</Button>
        </div>
      );
    }
}

export default Bookings;