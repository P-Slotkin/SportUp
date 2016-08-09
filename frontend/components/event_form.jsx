const React = require('react');
const hashHistory = require('react-router').hashHistory;
const EventActions = require('../actions/event_actions.js');
const EventStore = require('../stores/event_store.js');
const SessionStore = require('../stores/session_store.js');
const GroupActions = require('../actions/group_actions.js');

const EventForm = React.createClass({

  getInitialState() {
    return ({ title: "", location: "", description: "", creator_id: SessionStore.currentUser().id, group_id: this.props.params.groupId});
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
    this.setState({ description: newDescription.slice(0, 56) });
  },

  locationChange(e) {
    const newLocation = e.target.value;
    this.setState({ location: newLocation });
  },

  handleSubmit(e) {
    e.preventDefault();
    const eventData = this.state;
    EventActions.createEvent({ title: this.state.title, location: this.state.location, description: this.state.description.slice(0,51), creator_id: SessionStore.currentUser().id, group_id: this.props.params.groupId}, (event) => {
      hashHistory.push(`/groups/${this.state.group_id}`);
    });
    this.setState({ title: "", location: "", description: "" });
  },

  handleCancel(e) {
    e.preventDefault();
    this.navigateToSearch();
  },

  descriptionLength(){
    return `${this.state.description.length}/`;
  },

  render: function() {
    let well = "We'll";
    let whats = "What's";
    let events = "Event's";
    let sportups = "SportUp's";
    return (
      <div className="group-form-page-container">
        <div className="group-form-greeting">
          <h2> SportUp </h2>
          <h1> Start your own Event </h1>
          <h5> Everyone in your group can join. Most events start getting members within the first few days, so make sure to save adequate time for the even to fill up! </h5>
        </div>
        <h4> Try to be as descriptive as possible! </h4>
        <div className="new-group-form-container">
          <form onSubmit={this.handleSubmit}>
            <p> STEP 1 OF 3 </p>
            <label className="group-form-labels">{whats} your new SportUp {events} hometown?
              <br/>
              <input type="text" value={this.state.location}
                onChange={this.locationChange}
                className="login-input"
                placeholder="Please input a city"/>
            </label>
            <p> STEP 2 OF 3 </p>
              <label className="group-form-labels">What will your {events} name be?
                <br/>
                <input type="text" value={this.state.title}
                  onChange={this.titleChange}
                  className="login-input"
                  placeholder="Please choose your SportUp event name"/>
              </label>
            <p> STEP 3 OF 3 </p>
              <label className="group-form-labels">Describe who should rsvp, and what your event is.
                <br/>
                <input type="textarea" value={this.state.description}
                  onChange={this.descriptionChange}
                  className="textarea-input"
                  placeholder="Please describe your event (who should join/what the event will be/etc)"/>
              </label>
              <h6>Try to be concise, limit {this.descriptionLength()}56 characters</h6>
              <input className="login-button" type="submit" value="Create Event"/>
          </form>
        </div>
      </div>
    );
  }

});

module.exports = EventForm;
