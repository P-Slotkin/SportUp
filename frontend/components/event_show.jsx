const React = require('react');
const hashHistory = require('react-router').hashHistory;
const GroupActions = require('../actions/group_actions');
const GroupStore = require('../stores/group_store');
const MembershipStore = require('../stores/membership_store');
const Link = require('react-router').Link;
const MembershipActions = require('../actions/membership_actions');
const SessionStore = require('../stores/session_store');
const MembershipIndexItem = require('./membership_index_item');
const UserStore = require('../stores/user_store');
const UserActions = require('../actions/user_actions');
const GroupMemberItem = require('./group_member_item');
const GroupShowEventIndex = require('./group_show_event_index');
const EventStore = require('../stores/event_store');
const EventActions = require('../actions/event_actions');
const RsvpActions = require('../actions/rsvp_actions');
const CommentIndex = require('./comment_index');
const CommentActions = require('../actions/comment_actions');

var EventShow = React.createClass({

  getInitialState() {
    const event = EventStore.find(this.props.params.eventId) || {} ;
    let rsvps = [];
    let group = {};
    return ({event: event, rsvps: rsvps, rsvpInstances: [], group: group});
  },

  componentDidMount() {
    this.groupListener = GroupStore.addListener(this._groupChanged);
    this.eventListener = EventStore.addListener(this._eventChanged);
    EventActions.getEvent(this.props.params.eventId);
    GroupActions.fetchGroups();
    CommentActions.fetchComments();
  },

  componentWillUnmount() {
    this.groupListener.remove();
    this.eventListener.remove();
  },

  _eventChanged() {
    const event = EventStore.find(this.props.params.eventId);
    this.setState({ event: event, rsvps: event.members, rsvpInstances: event.rsvps, group: event.group});
  },

  _groupChanged() {
    const group = GroupStore.find(this.state.event.group_id);
    this.setState({ group: group});
  },

  makeDestroyButton() {
    if (this.state.event.creator_id === SessionStore.currentUser().id) {
      return (<div className="login-signup-buttons">
        <button onClick={this._destroy} className="login-button">Destroy
        </button>
      </div>);
    }
  },

  _destroy(e){
    e.preventDefault();
    EventActions.deleteEvent(this.props.params.eventId);
    hashHistory.push(`/groups/${this.state.event.group_id}`);
    GroupActions.getGroup(this.state.event.group_id);
  },

  memberOfEvent() {
    let memberOfEvent;
    Array.from(this.state.rsvps).forEach((member) => {
      if (member.id === SessionStore.currentUser().id) {
        memberOfEvent = true;
      }
    });
    if (memberOfEvent === true) {
      return true;
    } else {
      return false;
    }
  },

  _checkAlreadyJoinedText() {
    if (this.memberOfEvent()) {
      return "Leave Event";
    } else {
      return "RSVP!";
    }
  },

  _join(e){
    e.preventDefault();
    if (SessionStore.currentUser() === undefined) {
      hashHistory.push("/login");
      return;
    }
    let left;
    this.state.event.members.forEach((member) => {
      if (member.id === SessionStore.currentUser().id) {
        left = true;
        this.state.rsvpInstances.forEach((rsvpInstance) => {
          if (rsvpInstance.user_id === SessionStore.currentUser().id) {
            RsvpActions.deleteRsvp(rsvpInstance.id);
          }
        });
      }
      let newRsvps = this.state.rsvps.filter( (member) => {
        return (member.id !== SessionStore.currentUser().id);
      });
      this.setState({rsvps: newRsvps});
    });
    if (left !== true) {
      RsvpActions.createRsvp( { user_id: SessionStore.currentUser().id, event_id: this.state.event.id });
      let newRsvps = this.state.rsvps;
      newRsvps.push(SessionStore.currentUser());
      this.setState({rsvps: newRsvps});
    }
    GroupActions.getGroup(this.state.event.group_id);
  },

  _home(e) {
    e.preventDefault();
    hashHistory.push("/");
  },

  _group(e) {
    e.preventDefault();
    hashHistory.push(`/groups/${this.state.group.id}`);
  },

  _edit(e) {
    e.preventDefault();
    hashHistory.push(`/events/${this.state.event.id}/edit`);
  },

  showMembers() {
    return (<div className="event-member-index-container">
      <div className="rsvp-members-index-window">
        <h3> Want to go? </h3>
        <div className="login-signup-buttons"><button onClick={this._join} className="login-button-extended">{this._checkAlreadyJoinedText()}</button></div>
      </div>
      <h3> {this.state.rsvps.length} going </h3>
      <ul>
        {
          Array.from(this.state.rsvps).map(function (member) {
            return (<GroupMemberItem key={member.id} member={member} />);
          })
        }
      </ul>
    </div>);
  },

  makeEditButton() {
    if (SessionStore.currentUser().id === this.state.event.creator_id) {
      return (
        <div className="group-show-right-navbar">
          <div className="login-signup-buttons"><button onClick={this._edit} className="login-button join-button">Edit Group</button></div>
        </div>);
    }
  },

  groupNavbar(){
    let rightNavbar = (
      <div className="group-show-right-navbar">
        <div className="login-signup-buttons"><button onClick={this._group} className="login-button join-button">Back to Group</button></div>
        <div className="login-signup-buttons"><button onClick={this._join} className="login-button join-button">{this._checkAlreadyJoinedText()}</button></div>
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

  eventDescription() {
    let memberText;
    if (this.memberOfEvent()) {
      memberText = "Feel free to leave the SportUp event whenever you want";
    } else {
      memberText = "Join us and be the first to know when new Sportups are scheduled";
    }
    let comments;
    if (this.state.event.comments) {
      comments = this.state.event.comments.sort(function(x,y) {
        let a = new Date(x.created_at);
        let b = new Date(y.created_at);
        return a-b;
      });
    }
    return (
      <div className="event-show-main-body">
        <div className="event-show-description group">
          <h2>{this.state.event.title}</h2>
          <h3>when filler </h3>
          <h3> location filler </h3>
          <p>{this.state.event.description}</p>
          <div className="bottom-description">
            <div className="bottom-description-rightest">
              {this.makeDestroyButton()}
            </div>
          </div>
        </div>
        <CommentIndex eventId={this.props.params.eventId} event={this.state.event} comments={comments}/>
      </div>

    );
  },

  // eventComments() {
  //   if (this.state.event.comments && this.state.event.comments.length > 0) {
  //     return (<EventShowCommentIndex comments={this.state.event.comments} />);
  //   }
  // },

  render: function() {
    if (this.state.event && this.state.group) {
      return (
        <div className="group-show-container group">
          <h1>{this.state.group.title}</h1>
            {this.groupNavbar()}
            <div className="side-info-filler group">
              <div className="side-info-group-pic">
                <img src={this.state.group.image_url}/>
              </div>
              <div className="side-info-attributes group">
                <h3> {this.state.group.location} </h3>
                <ul>
                  <li>
                    <div className="side-info-left">Athletes:
                    </div>
                    <div className="side-info-right">{this.props.population}
                    </div>
                  </li>
                  <li>
                    <div className="side-info-left">Upcoming Events:
                    </div>
                  </li>
                  <li>
                    <div className="side-info-left">Past Events:
                    </div>
                    <div className="side-info-right">filler
                    </div>
                  </li>
                  <li>
                    <div className="side-info-left">Our calendar:
                    </div>
                    <div className="side-info-right">insert icon
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            {this.eventDescription()}
            {this.showMembers()}
        </div>
      );
    } else {
      return( <div /> );
    }
  }

});

module.exports = EventShow;
