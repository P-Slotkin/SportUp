const React = require('react');
const DateConstants = require('../constants/date_constants');
const MonthConstants = require('../constants/month_constants');
const MonthLeapConstants = require('../constants/month_leap_constants');
const MonthDaysConstants = require('../constants/monthdays_constants');
const hashHistory = require('react-router').hashHistory;
const GroupActions = require('../actions/group_actions');
const EventActions = require('../actions/event_actions');

const GroupCalendar = React.createClass({

  getInitialState(){
    let year = parseInt(this.props.currentDate.slice(0, 4));
    let month = parseInt(this.props.currentDate.slice(5, 7));
    let eventsHash = {};
    this.props.events.forEach((event) => {
      let date = event.date.slice(0, 10);
      if (eventsHash[date]) {
        eventsHash[date].push(event);
      } else {
        eventsHash[date] = [event];
      }
    });
    return ({ year: year, month: month, events: eventsHash, group: this.props.group });
  },

  nextMonth(e) {
    e.preventDefault();
    if (this.state.month === 12) {
      this.setState({ month: 1, year: this.state.year + 1 });
    } else {
      this.setState({ month: this.state.month + 1 });
    }
  },

  previousMonth(e) {
    e.preventDefault();
    if (this.state.month === 1) {
      this.setState({ month: 12, year: this.state.year - 1 });
    } else {
      this.setState({ month: this.state.month - 1 });
    }
  },

  getDayFirstMonth() {
    const month = this.state.month;
    let yearLastTwoDigits = this.state.year.toString().slice(2);
    let leapYears = Math.floor(parseInt(yearLastTwoDigits) / 4);
    let monthLeap;
    if (this.state.year % 4 === 0) {
      monthLeap = MonthLeapConstants[parseInt(month)];
    } else {
      monthLeap = MonthConstants[parseInt(month)];
    }
    let dayNumber = (leapYears + parseInt(yearLastTwoDigits) + monthLeap) % 7;
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

  goToEvent(id, e) {
    EventActions.getEvent(id);
    hashHistory.push(`/events/${id}`);
  },

  _home(e) {
    e.preventDefault();
    hashHistory.push("/");
  },

  _group(e) {
    GroupActions.fetchGroups();
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

  renderEventsForDate(day) {
    let dayTwoDigits = day.toString();
    if (dayTwoDigits.length < 2) {
      dayTwoDigits = "0" + dayTwoDigits;
    }
    let monthTwoDigits = this.state.month.toString();
    if (monthTwoDigits.length < 2) {
      monthTwoDigits = "0" + monthTwoDigits;
    }
    let counter = 0;
    let output;
    if (this.state.events[this.state.year.toString() + '-' + monthTwoDigits + '-' + dayTwoDigits]) {
      output = this.state.events[this.state.year.toString() + '-' + monthTwoDigits + '-' + dayTwoDigits].map((event)=>{
        if (counter <= 0) {
          let date = new Date(event.date);
          let outputDate = DateConstants[(date.getMonth() + 1)] + ", " + date.getDate();
          let minutes;
          if (date.getMinutes().toString().length < 2) {
            minutes = "0" + date.getMinutes();
          } else {
            minutes = date.getMinutes();
          }
          let am;
          let time;
          if (parseInt(date.getHours()) < 13 && parseInt(date.getHours()) > 0) {
            time = date.getHours();
            am = "am";
          } else {
            time = (parseInt(date.getHours()) - 12).toString();
            am = "pm";
          }
          let outputTime = time + ":" + minutes + " " + am;
          let eventTitle;
          if (event.title.length > 15) {
            eventTitle = event.title.slice(0, 13) + "...";
          } else {
            eventTitle = event.title;
          }
          if (counter < 1){
            counter++;
            return (
              <div className="event-calendar-item" key={counter}>
                <h5 onClick={this.goToEvent.bind(this, event.id)}>{eventTitle}</h5>
                <p onClick={this.goToEvent.bind(this, event.id)}>{outputDate}</p>
                <p onClick={this.goToEvent.bind(this, event.id)}>{outputTime}</p>
              </div>);
          }
        }
      });
    }
    return output;
  },

  formatCalendarComponent() {
    let days = [];
    let extraBeginningDays = this.getDayFirstMonth();
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
            {this.renderEventsForDate(day)}
          </div>);
        })}
      </div>
    );
  },

  render: function() {
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
