const React = require('react');
const Link = require('react-router').Link;
const EventActions = require('../actions/event_actions');
const hashHistory = require('react-router').hashHistory;
const SessionStore = require('../stores/session_store');
const RsvpActions = require('../actions/rsvp_actions');
const GroupActions = require('../actions/group_actions');
const EventStore = require('../stores/event_store');
const GroupStore = require('../stores/group_store');
const DateConstants = require('../constants/date_constants');

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
  // 
  // edit(e){
  //   e.preventDefault();
  //   hashHistory.push(`/events/${this.state.event.id}/edit`);
  // },
  //
  // destroy(e){
  //   e.preventDefault();
  //   EventActions.deleteEvent(this.props.event.id);
  //   this.setState({destroyed: true});
  //   // GroupActions.getGroup(this.state.event.group_id);
  // },
  //
  // join(e){
  //   e.preventDefault();
  //   if (SessionStore.currentUser() === undefined) {
  //     hashHistory.push("/login");
  //     return;
  //   }
  //   let left;
  //   this.props.event.members.forEach((member) => {
  //     if (member.id === SessionStore.currentUser().id) {
  //       left = true;
  //       this.props.event.rsvps.forEach((rsvp) => {
  //         if (rsvp.user_id === SessionStore.currentUser().id) {
  //           RsvpActions.deleteRsvp(rsvp.id);
  //         }
  //       });
  //     }
  //     let newRsvps = this.state.rsvps.filter( (rsvp) => {
  //       return (rsvp !== SessionStore.currentUser().id);
  //     });
  //     this.setState({rsvps: newRsvps});
  //   });
  //   if (left !== true) {
  //     RsvpActions.createRsvp( { user_id: SessionStore.currentUser().id, event_id: this.props.event.id });
  //     let newRsvps = this.state.rsvps;
  //     newRsvps.push(SessionStore.currentUser().id);
  //     this.setState({rsvps: newRsvps});
  //   }
  //   GroupActions.getGroup(this.state.event.group_id);
  // },

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

    let date = new Date(this.state.event.date);
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
    return(
      <div className="group-show-event-item-container" key="group-show-event-item-container">
        <h2> {this.state.event.title} </h2>
        <div className="group-show-event-item-left-container" key="group-show-event-item-left-container">
          <p onClick={this.goToEvent.bind(this, this.state.event.id)} className="group-show-event-item-location-link"> {this.state.event.location} </p>
          <div className="group-show-event-item-attenders" key="group-show-event-item-attenders">{attenders}</div>
          <p>{this.state.event.description.slice(0, 100)}</p>
          <p onClick={this.goToEvent.bind(this, this.state.event.id)} className="group-show-event-item-location-link"> Learn more </p>
          <h5>Hosted by {this.state.event.creator.name}</h5>
        </div>
        <div className="group-show-event-item-right-container" key="group-show-event-item-right-container">
          <p> {outputDate} </p>
          <p className="time-event-index-item"> {outputTime} </p>
          <p onClick={this.goToEvent.bind(this, this.state.event.id)} className="group-show-event-item-location-link cursor">{joinedText}</p>
          <p onClick={this.goToEvent.bind(this, this.state.event.id)} className="group-show-event-item-location-link cursor">{this.state.event.members.length} going </p>
          <p onClick={this.goToEvent.bind(this, this.state.event.id)} className="group-show-event-item-location-link cursor">{this.state.event.comments.length} comments</p>
        </div>
      </div>
    );
  }

});

module.exports =GroupShowEventIndexItem;
