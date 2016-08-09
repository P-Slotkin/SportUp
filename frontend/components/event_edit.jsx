const React = require('react');
const ReactDOM = require('react-dom');
const ReactRouter = require('react-router');
const Link = require('react-router').Link;
const EventStore = require('../stores/event_store');
const ErrorStore = require('../stores/error_store');
const hashHistory = ReactRouter.hashHistory;
const EventActions = require('../actions/event_actions');
const GroupStore = require('../stores/group_store');
const GroupActions= require('../actions/group_actions');

var EventEdit = React.createClass({

  getInitialState() {
    let event = EventStore.find(this.props.params.eventId);
    return { event: event, id: event.id, title: event.title, location: event.location, description: event.description };
  },

  handleSubmit(e) {
    e.preventDefault();
    EventActions.editEvent(this.state);
    GroupActions.getGroup(this.state.event.group_id);
    this.setState({ title: "", location: "", description: "" });
    hashHistory.push(`/groups/${this.state.event.group_id}`);
  },

  errors() {
    const errors = ErrorStore.errors('');
    const messages = errors.map( (errorMsg, i) => {
      return <li key={ i }>{ errorMsg }</li>;
    });
    return <ul className='errors'>{ messages }</ul>;
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

  descriptionLength() {
    return `${this.state.description.length} characters.`;
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
        <h4> Try to be as concise as possible! </h4>
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

module.exports = EventEdit;
