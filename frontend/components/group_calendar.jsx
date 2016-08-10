const React = require('react');
const DateConstants = require('../constants/date_constants');
const MonthConstants = require('../constants/month_constants');
const MonthLeapConstants = require('../constants/month_leap_constants');
const MonthDaysConstants = require('../constants/monthdays_constants');
const hashHistory = require('react-router').hashHistory;
const GroupActions = require('../actions/group_actions');

const GroupCalendar = React.createClass({

  getInitialState(){
    let year = parseInt(this.props.currentDate.slice(0, 4));
    let month = parseInt(this.props.currentDate.slice(5, 7));
    return ({ year: year, month: month, events: this.props.events, group: this.props.group });
  },

  nextMonth(e) {
    e.preventDefault();
    if (this.state.month === 12) {
      this.setState({ month: 1, year: this.state.year + 1 });
    } else {
      this.setState({ month: this.state.month + 1 });
    }
    GroupActions.getGroup(this.props.group.id);
  },

  previousMonth(e) {
    e.preventDefault();
    if (this.state.month === 1) {
      this.setState({ month: 12, year: this.state.year - 1 });
    } else {
      this.setState({ month: this.state.month - 1 });
    }
    GroupActions.getGroup(this.props.group.id);
  },

  getDayFirstMonth() {
    const month = this.state.month;
    let yearLastTwoDigits = this.state.year.toString().slice(2);
    let leapYears = Math.floor(parseInt(yearLastTwoDigits) / 4);
    let monthLeap;
    if (parseInt(this.state.year) % 4 === 0) {
      monthLeap = MonthLeapConstants[parseInt(month)];
    } else {
      monthLeap = MonthConstants[parseInt(month)];
    }
    let dayNumber = (1 + leapYears + yearLastTwoDigits + MonthConstants[parseInt(month)]) % 7;
    return dayNumber;
  },

  getNumberOfWeeks(daynumber){
    const month = this.state.month;
    if ((MonthDaysConstants[month] + daynumber ) % 28 === 0) {
      return 4;
    } else if ((MonthDaysConstants[month] + daynumber ) % 28 <= 7 ) {
      return 5;
    } else {
      return 6;
    }
  },

  _home(e) {
    e.preventDefault();
    hashHistory.push("/");
  },

  _group(e) {
    e.preventDefault();
    hashHistory.push(`/groups/${this.state.group.id}`);
  },

  groupNavbar(){
    let rightNavbar = (
      <div className="group-show-right-navbar">
        <div className="login-signup-buttons"><button onClick={this._group} className="login-button join-button">Back to Group</button></div>
    </div>);
    let leftNavbar = (
      <div className="group-show-left-navbar">
        <div onClick={this._home}>Home</div>
      </div>
    );
    return (
      <div className="group-show-navbar group">
        {leftNavbar}
        {rightNavbar}
      </div>
    );
  },

  formatCalendarComponent() {
    let days = [];
    let extraBeginningDays = this.getDayFirstMonth();
    console.log(extraBeginningDays);
    for (let i = 1; i <= extraBeginningDays; i++) {
      days.push("_");
    }
    const month = this.state.month;
    let daysInMonth = MonthDaysConstants[month];
    for (let i = 1; i <= daysInMonth; i++) {
      days.push(i);
    }
    if (this.state.month === 2 && this.state.year % 4 === 0) {
      days.push(29);
    }
    let numberOfDays = this.getNumberOfWeeks(extraBeginningDays) * 7;
    for (let i = 1; i <= numberOfDays - extraBeginningDays - daysInMonth; i++) {
      days.push("_");
    }
    let counter = 0;
    return (
      <div className="calendar-component-container group">
        {days.map((day) => {
          counter++;
          return (<div key={counter} className="calendar-day-container">
            <h4> {day} </h4>
          </div>);
        })}
      </div>
    );
  },

  render: function() {
    console.log(this.state.month);
    let stringMonth = this.state.month.toString();
    let wordMonth = DateConstants[stringMonth];
    return (
      <div className="group-show-container group">
        <h1>{this.state.group.title}</h1>
          {this.groupNavbar()}
        <div className="whole-calendar-container">
          <h2> Calendar </h2>
          <div className="next-previous-month">
            <div className="login-signup-buttons left"><button onClick={this.previousMonth} className="login-button join-button">Previous</button></div>
            <h4 className="left">{wordMonth} {this.state.year}</h4>
            <div className="login-signup-buttons left"><button onClick={this.nextMonth} className="login-button join-button">Next</button></div>
          </div>
          <div className="calendar-day-labels">
            <p> SUN </p>
            <p> MON </p>
            <p> TUE </p>
            <p> WED </p>
            <p> THU </p>
            <p> FRI </p>
            <p> SAT </p>
          </div>
          {this.formatCalendarComponent()}
        </div>
      </div>
    );
  }

});

module.exports = GroupCalendar;
