const React = require('react');
const Link = require('react-router').Link;
const EventActions = require('../actions/event_actions');
const hashHistory = require('react-router').hashHistory;
const SessionStore = require('../stores/session_store');
const RsvpActions = require('../actions/rsvp_actions');
const GroupActions = require('../actions/group_actions');
const EventStore = require('../stores/event_store');
const GroupStore = require('../stores/group_store');

const GroupShowEventIndexItem = React.createClass({

  getInitialState(){
    let rsvps = this.props.event.members.map((member) => {
      return member.id;
    });
    return ({event: this.props.event, rsvps: rsvps, destroyed: false});
  },

  componentDidMount() {
    this.groupListener = GroupStore.addListener(this._groupChanged);
  },

  componentWillUnmount() {
    this.groupListener.remove();
  },

  _groupChanged() {
    this.setState({event: this.props.event});
  },

  edit(e){
    e.preventDefault();
    hashHistory.push(`/events/${this.state.event.id}/edit`);
  },

  destroy(e){
    e.preventDefault();
    EventActions.deleteEvent(this.props.event.id);
    this.setState({destroyed: true});
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
    GroupActions.getGroup(this.state.event.group_id);
  },

  goToUser(id, e) {
    hashHistory.push(`/users/${id}`);
  },

  goToEvent(id, e) {
    hashHistory.push(`/events/${id}`);
  },

  render () {

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

    let attenders = this.state.event.members.map((member)=>{
      return (<div key={member.id} onClick={this.goToUser.bind(this, member.id)}><img key={member} src={member.image_url}/></div>);
    });
    return(
      <div className="group-show-event-item-container">
        <h2> {this.state.event.title} </h2>
        <div className="group-show-event-item-left-container">
          <p onClick={this.goToEvent.bind(this, this.state.event.id)} className="group-show-event-item-location-link"> {this.state.event.location} </p>
          <div className="group-show-event-item-attenders">{attenders}</div>
          <p>{this.state.event.description.slice(0, 100)}</p>
          <p onClick={this.goToEvent.bind(this, this.state.event.id)} className="group-show-event-item-location-link"> Learn more </p>
          <h5>Hosted by {this.state.event.creator.name}</h5>
        </div>
        <div className="group-show-event-item-right-container">
          <p> Time </p>
          <p onClick={this.goToEvent.bind(this, this.state.event.id)} className="group-show-event-item-location-link">{joinedText}</p>
          <p onClick={this.goToEvent.bind(this, this.state.event.id)} className="group-show-event-item-location-link">{this.state.event.members.length} going </p>
          <p onClick={this.goToEvent.bind(this, this.state.event.id)} className="group-show-event-item-location-link"># comments</p>
        </div>
      </div>
    );
  }

  // render () {
  //   const event = this.props.event;
  //   let buttons;
  //   let alreadyJoined = false;
  //   this.state.rsvps.forEach((member) => {
  //     if (member === SessionStore.currentUser().id) {
  //       alreadyJoined = true;
  //     }
  //   });
  //   let joinedText;
  //   if (alreadyJoined) {
  //     joinedText = "Leave Event";
  //   } else {
  //     joinedText = "RSVP";
  //   }
  //   if (SessionStore.currentUser().id === event.creator_id) {
  //     buttons = (<div className="event-buttons event-creator-buttons">
  //       <div className="login-signup-buttons destroy">
  //         <button onClick={this.edit} className="login-button">Edit
  //         </button>
  //         <button onClick={this.destroy} className="login-button">Destroy
  //         </button>
  //       </div>
  //     </div>);
  //   } else {
  //     buttons = (<div className="event-buttons">
  //       <div className="login-signup-buttons">
  //         <button onClick={this.join} className="login-button">{joinedText}
  //         </button>
  //       </div>
  //     </div>);
  //   }
  //   if (this.state.destroyed){
  //     return (
  //       <li className="group-show-event-index-item-link" >
  //         <h3>Event Deleted </h3>
  //       </li>);
  //   } else {
  //     return (
  //       <li className="group-show-event-index-item-link" >
  //         <h3> {event.title}</h3>
  //         <h5> {event.location}</h5>
  //         <h6>Hosted by: {event.creator.name}</h6>
  //         <Link to={``} >
  //           <img src={event.image_url}/>
  //         </Link>&nbsp;
  //         <p>{event.description}</p>
  //         {buttons}
  //       </li>
  //     );
  //   }
  // }
});

module.exports =GroupShowEventIndexItem;
