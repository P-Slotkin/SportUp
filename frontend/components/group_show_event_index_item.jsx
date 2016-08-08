const React = require('react');
const Link = require('react-router').Link;
const EventActions = require('../actions/event_actions.js');
const hashHistory = require('react-router').hashHistory;
const SessionStore = require('../stores/session_store.js');
const RsvpActions = require('../actions/rsvp_actions.js');
const GroupActions = require('../actions/group_actions.js');

const GroupShowEventIndexItem = React.createClass({

  getInitialState(){
    let rsvps = this.props.event.members.map((member) => {
      return member.id;
    });
    return ({event: this.props.event, rsvps: rsvps});
  },

  edit(e){
    e.preventDefault();
  },

  destroy(e){
    e.preventDefault();
    EventActions.deleteEvent(this.props.event.id);
    // GroupActions.getGroup(this.state.event.group_id);
  },

  join(e){
    e.preventDefault();
    if (SessionStore.currentUser() === undefined) {
      hashHistory.push("/login");
      return;
    }
    let left;
    this.props.event.members.forEach((member) => {
      if (member.id === SessionStore.currentUser().id) {
        left = true;
        this.props.event.rsvps.forEach((rsvp) => {
          if (rsvp.user_id === SessionStore.currentUser().id) {
            RsvpActions.deleteRsvp(rsvp.id);
          }
        });
      }
      let newRsvps = this.state.rsvps.filter( (rsvp) => {
        return (rsvp !== SessionStore.currentUser().id);
      });
      this.setState({rsvps: newRsvps});
    });
    if (left !== true) {
      RsvpActions.createRsvp( { user_id: SessionStore.currentUser().id, event_id: this.props.event.id });
      let newRsvps = this.state.rsvps;
      newRsvps.push(SessionStore.currentUser().id);
      this.setState({rsvps: newRsvps});
    }
  },

  render () {
    const event = this.props.event;
    let buttons;
    let alreadyJoined = false;
    this.state.rsvps.forEach((member) => {
      if (member === SessionStore.currentUser().id) {
        alreadyJoined = true;
      }
    });
    let joinedText;
    if (alreadyJoined) {
      joinedText = "Leave Event";
    } else {
      joinedText = "RSVP";
    }
    if (SessionStore.currentUser().id === event.creator_id) {
      buttons = (<div className="event-buttons event-creator-buttons">
        <div className="login-signup-buttons destroy">
          <button onClick={this.edit} className="login-button">Edit
          </button>
          <button onClick={this.destroy} className="login-button">Destroy
          </button>
        </div>
      </div>);
    } else {
      buttons = (<div className="event-buttons">
        <div className="login-signup-buttons">
          <button onClick={this.join} className="login-button">{joinedText}
          </button>
        </div>
      </div>);
    }

    return (
      <li className="group-show-event-index-item-link" >
        <h3> {event.title}</h3>
        <h5> {event.location}</h5>
        <h6>Hosted by: {event.creator.name}</h6>
        <Link to={``} >
          <img src={event.image_url}/>
        </Link>&nbsp;
        <p>{event.description}</p>
        {buttons}
      </li>
    );
  }
});

module.exports =GroupShowEventIndexItem;
