const React = require('react');
const DateConstants = require('../constants/date_constants');
const MonthConstants = require('../constants/month_constants');
const GroupCalendar = React.createClass({

  getInitialState(){
    let year = parseInt(this.props.currentDate.slice(0, 4));
    let month = parseInt(this.props.currentDate.slice(5, 7));
    return ({ year: year, month: month, events: this.props.events });
  },

  nextMonth() {
    if (this.state.month === 12) {
      this.setState({ month: 0, year: this.state.year + 1 });
    } else {
      this.setState({ month: this.state.month + 1 });
    }
  },

  previousMonth() {
    if (this.state.month === 1) {
      this.setState({ month: 12, year: this.state.year - 1 });
    } else {
      this.setState({ month: this.state.month - 1 });
    }
  },

  getDayFirstMonth(year, month) {
    let yearLastTwoDigits = parseInt(year.split(2));
    let leapYears = Math.floor(yearLastTwoDigits / 4);
    let dayNumber = (6 + leapYears + yearLastTwoDigits + MonthConstants.parseInt(month)) % 7;
    return dayNumber;
  },

  render: function() {
    return (
      <div />
    );
  }

});

module.exports = GroupCalendar;
