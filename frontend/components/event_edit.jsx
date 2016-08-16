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
    let event = EventStore.find(this.props.params.eventId) || {};
    return { event: event, id: event.id, title: event.title, location: event.location, description: event.description, imageFile: null, image_url: event.image_url };
  },

  componentDidMount() {
    this.eventListener = EventStore.addListener(this._eventChange);
    EventActions.getEvent(this.props.params.eventId);
  },

  componentWillUnmount() {
    this.eventListener.remove();
  },

  _eventChange(){
    const event = EventStore.find(this.props.params.eventId);
    this.setState( { event: event, id: event.id, title: event.title, location: event.location, description: event.description, image_url: event.image_url });
  },

  handleSubmit(e) {
    e.preventDefault();
    var formData = new FormData();
    formData.append("event[id]", this.state.id);
    formData.append("event[title]", this.state.title);
    formData.append("event[location]", this.state.location);
    formData.append("event[description]", this.state.description);
    formData.append("event[image]", this.state.imageFile);
    GroupActions.editGroup(formData);
    this.setState({ id: "", title: "", location: "", description: "", imageFile: null, image_url: null});
    hashHistory.push(`/events/${this.props.params.eventId}`);
  },

  updateFile(e) {
    var file = e.currentTarget.files[0];
    var fileReader = new FileReader();
    fileReader.onloadend = function() {
      this.setState({ imageFile: file, image_url: fileReader.result });
    }.bind(this);

    if (file) {
      fileReader.readAsDataURL(file);
    }
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
    if (this.state.description){
      return `${this.state.description.length} characters.`;
    }
  },


  render: function() {
    let well = "We'll";
    let whats = "What's";
    let events = "Event's";
    let sportups = "SportUp's";
    let that = this;
    return (
      <div className="group-form-page-container">
        <div className="group-form-greeting">
          <h2> SportUp </h2>
          <h1> Start your own Event </h1>
          <h5> Everyone in your group can join. Most events start getting members within the first few days, so make sure to save adequate time for the even to fill up! </h5>
        </div>
        <h4> Try to be as concise as possible! </h4>
        <div className="edit-whole-form-container">
          <div className="new-group-form-container">
            <form onSubmit={this.handleSubmit}>
              <br />
              <label className="login-labels update-image">Change Event Picture
                <br/>
                <input type="file"
                  onChange={this.updateFile}
                  className="login-input"/>
              </label>
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
                <h6>{this.descriptionLength()} We recommend at least 50 characters in your description</h6>
                <input className="login-button" type="submit" value="Create Event"/>
            </form>
            <div className="edit-event-group">
              <img src={that.state.image_url}/>
            </div>
          </div>
        </div>
      </div>
    );
  }

});

module.exports = EventEdit;
