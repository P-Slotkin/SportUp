const React = require('react');
const hashHistory = require('react-router').hashHistory;
const EventActions = require('../actions/event_actions.js');
const EventStore = require('../stores/event_store.js');
const SessionStore = require('../stores/session_store.js');
const GroupActions = require('../actions/group_actions.js');

const EventForm = React.createClass({

  getInitialState() {
    let currentDate = new Date();
    let date = currentDate.toJSON().slice(0,10);
    let time = currentDate.toJSON().slice(11, 17) + "00";
    return ({ title: "", location: "", description: "", date: date, time: time, creator_id: SessionStore.currentUser().id, group_id: this.props.params.groupId});
  },

  componentDidMount() {
    this.eventListenerToken = EventStore.addListener(this.redirectIfEventMade);
  },

  componentWillUnmount() {
    this.eventListenerToken.remove();
  },

  redirectIfEventMade() {
    let event = EventStore.all()[EventStore.all().length - 1];
    hashHistory.push(`/groups/${event.group_id}`);
    GroupActions.getGroup(this.props.params.groupId);
  },

  titleChange(e) {
    const newTitle = e.target.value;
    this.setState({ title: newTitle });
  },

  descriptionChange(e) {
    const newDescription = e.target.value;
    this.setState({ description: newDescription });
  },

  locationChange(e) {
    const newLocation = e.target.value;
    this.setState({ location: newLocation });
  },

  dateChange(e) {
    const newDate = e.target.value;
    this.setState({ date: newDate });
  },

  timeChange(e) {
    const newTime = e.target.value;
    this.setState({ time: newTime});
  },

  handleSubmit(e) {
    console.log(this.state);
    e.preventDefault();
    const eventData = this.state;
    let hours = (parseInt(this.state.time.slice(0, 2)) + 4) % 24;
    let submitTime = hours.toString() + this.state.time.slice(2);
    EventActions.createEvent({ title: this.state.title, date: this.state.date.concat(" ").concat(submitTime), location: this.state.location, description: this.state.description, creator_id: SessionStore.currentUser().id, group_id: this.props.params.groupId}, (event) => {
      hashHistory.push(`/groups/${this.state.group_id}`);
    });
    let currentDate = new Date();
    let date = currentDate.toJSON().slice(0,10);
    let time = currentDate.toJSON().slice(11, 17) + "00";
    this.setState({ title: "", location: "", description: "", date: date, time: time });
  },

  handleCancel(e) {
    e.preventDefault();
    this.navigateToSearch();
  },

  descriptionLength(){
    return `${this.state.description.length}`;
  },

  render: function() {
    let well = "We'll";
    let whats = "What's";
    let events = "Event's";
    let sportups = "SportUp's";
    return (
      <div className="group-form-page-container">
        <div className="group-form-greeting">
          <div className="group-form-logo"><img src={window.imageAssets.whiteLogo} /></div>
          <h1> Start your own Event </h1>
          <h5> Everyone in your group can join. Most events start getting members within the first few days, so make sure to save adequate time for the even to fill up! </h5>
        </div>
        <h4> Try to be as descriptive as possible! </h4>
        <div className="new-group-form-container">
          <form onSubmit={this.handleSubmit}>
            <p> STEP 1 OF 4 </p>
            <img src={window.imageAssets.nametagIcon} />
              <label className="group-form-labels">What will your {events} name be?
                <br/>
                <input type="text" value={this.state.title}
                  onChange={this.titleChange}
                  className="login-input"
                  placeholder="Please choose your SportUp event name"/>
              </label>
            <p> STEP 2 OF 4 </p>
            <img src={window.imageAssets.timecalendarIcon} />
            <label className="group-form-labels">WHEN is your event?
              <br/>
              <input type="date" value={this.state.date}
                onChange={this.dateChange}
                className="login-input"/>
              <br/>
              <input type="time" value={this.state.time}
                onChange={this.timeChange}
                className="login-input"/>
            </label>
            <p> STEP 3 OF 4 </p>
            <img src={window.imageAssets.worldIcon} />
              <label className="group-form-labels">WHERE is your event?
                <br/>
                <input type="text" value={this.state.location}
                  onChange={this.locationChange}
                  className="login-input"
                  placeholder="Please input a city"/>
              </label>
            <p> STEP 4 OF 4 </p>
              <label className="group-form-labels">Describe who should rsvp, and what your event is.
                <br/>
                <input type="textarea" value={this.state.description}
                  onChange={this.descriptionChange}
                  className="textarea-input"
                  placeholder="Please describe your event (who should join/what the event will be/etc)"/>
              </label>
              <h6>{this.descriptionLength()}: We recommend at least 50 characters in your description</h6>
              <input className="login-button" type="submit" value="Create Event"/>
          </form>
        </div>
      </div>
    );
  }

});

module.exports = EventForm;
