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


const GroupShow = React.createClass({

  getInitialState() {
    const members = [];
    const memberships = [];
    const group = GroupStore.find(this.props.params.groupId) || {} ;
    return { group: group, members: members, memberships: memberships, showMembers: false };
  },

  componentDidMount() {
    this.groupListener = GroupStore.addListener(this._groupChanged);
    GroupActions.getGroup(this.props.params.groupId);
  },

  componentWillUnmount() {
    this.groupListener.remove();
  },

  _groupChanged() {
    const group = GroupStore.find(this.props.params.groupId);
    this.setState({ group: group, members: group.members, memberships: group.memberships});
  },

  makeDestroyButton() {
    if (this.state.group.creator_id === SessionStore.currentUser().id) {
      return (<div className="login-signup-buttons">
        <button onClick={this._destroy} className="login-button">Destroy
        </button>
      </div>);
    }
  },

  _destroy(e){
    e.preventDefault();
    GroupActions.deleteGroup(this.state.group.id);
    hashHistory.push("/");
  },

  memberOfGroup() {
    let memberOfGroup;
    Array.from(this.state.members).forEach((member) => {
      if (member.id === SessionStore.currentUser().id) {
        memberOfGroup = true;
      }
    });
    if (memberOfGroup === true) {
      return true;
    } else {
      return false;
    }
  },

  makeCreateEventButton(){
    if (this.memberOfGroup()) {
      return (<div className="login-signup-buttons">
        <button onClick={this._createEvent} className="login-button new-event-button">New Event
        </button>
      </div>);
    }
  },

  upcomingEventsCount(){
    let counter = 0;
    if (this.state.group.events) {
      let todaysYearMonthDate = [];
      todaysYearMonthDate.push(new Date().getUTCFullYear());
      todaysYearMonthDate.push(new Date().getUTCMonth());
      todaysYearMonthDate.push(new Date().getUTCDate());
      this.state.group.events.forEach((event) => {
        if (parseInt(event.date.slice(0, 4)) === todaysYearMonthDate[0] &&
          parseInt(event.date.slice(5, 7)) === todaysYearMonthDate[1] + 1 &&
          parseInt(event.date.slice(8, 10)) - 14 <= todaysYearMonthDate[2] &&
          parseInt(event.date.slice(8, 10)) >= todaysYearMonthDate[2]) {
            counter++;
        } else if (parseInt(event.date.slice(0, 4)) === todaysYearMonthDate[0] &&
          parseInt(event.date.slice(5, 7)) - 2 === todaysYearMonthDate[1] &&
          parseInt(event.date.slice(8, 10)) <= 14 - (30 - todaysYearMonthDate[2])) {
            counter++;
        } else if (parseInt(event.date.slice(0, 4)) - 1 === todaysYearMonthDate[0] &&
          parseInt(event.date.slice(5, 7)) - 12 === todaysYearMonthDate[1] &&
          parseInt(event.date.slice(8, 10)) <= 14 - (31 - todaysYearMonthDate[2])) {
            counter++;
        } else {
        }
      });
    }
    return counter;
  },

  pastEventsCount(){
    let counter = 0;
    if (this.state.group.events) {
      let todaysYearMonthDate = [];
      todaysYearMonthDate.push(new Date().getUTCFullYear());
      todaysYearMonthDate.push(new Date().getUTCMonth());
      todaysYearMonthDate.push(new Date().getUTCDate());
      this.state.group.events.forEach((event) => {
        if (parseInt(event.date.slice(0, 4)) < todaysYearMonthDate[0]) {
            counter++;
        } else if (parseInt(event.date.slice(0, 4)) === todaysYearMonthDate[0] &&
          parseInt(event.date.slice(5, 7)) - 1 < todaysYearMonthDate[1]) {
            counter++;
        } else if (parseInt(event.date.slice(0, 4)) === todaysYearMonthDate[0] &&
          parseInt(event.date.slice(5, 7)) - 1 === todaysYearMonthDate[1] &&
          parseInt(event.date.slice(8, 10)) < todaysYearMonthDate[2]) {
            counter++;
        } else {
        }
      });
    }
    return counter;
  },

  _createEvent(e){
    e.preventDefault();
    hashHistory.push(`/eventform/${this.state.group.id}`);
  },

  _checkAlreadyJoinedText() {
    if (this.memberOfGroup()) {
      return "Leave Group";
    } else {
      return "Join us!";
    }
  },

  _join() {
    if (SessionStore.currentUser() === undefined) {
      hashHistory.push("/login");
      return;
    }
    let left;
    this.state.members.forEach((member) => {
      if (member.id === SessionStore.currentUser().id) {
        left = true;
        this.state.memberships.forEach((membership) => {
          if (membership.user_id === SessionStore.currentUser().id && membership.group_id === this.state.group.id) {
            MembershipActions.deleteMembership(membership.id);
          }
        });
        this.setState( { members: this.state.members.filter((member) => {
          return member.id !== SessionStore.currentUser().id; } )
        });
      }
    });
    if (left !== true) {
      MembershipActions.createMembership( { user_id: SessionStore.currentUser().id, group_id: this.props.params.groupId });
      this.state.members.push( SessionStore.currentUser());
      this.setState( {members: this.state.members});
    }
  },

  _home(e) {
    e.preventDefault();
    hashHistory.push("/");
  },

  _edit(e) {
    e.preventDefault();
    hashHistory.push(`/groups/${this.state.group.id}/edit`);
  },

  showMembers() {
    if (this.state.showMembers) {
      return (<div className="member-index-container">
        <ul>
          {
            Array.from(this.state.members).map(function (member) {
              return (<GroupMemberItem key={member.id} member={member} />);
            })
          }
        </ul>
      </div>);
    }
  },

  _toggleMembers() {
    if (this.state.showMembers) {
      this.setState({ showMembers: false });
    } else {
      this.setState({ showMembers: true });
    }
  },

  groupNavbar(){
    let editButton;
    if (SessionStore.currentUser().id === this.state.group.creator_id) {
      editButton = (
        <div className="group-show-right-navbar">
          <div className="login-signup-buttons"><button onClick={this._edit} className="login-button join-button">Edit Group</button></div>
        </div>);
    }
    let rightNavbar = (
      <div className="group-show-right-navbar">
        <div className="login-signup-buttons"><button onClick={this._join} className="login-button join-button">{this._checkAlreadyJoinedText()}</button></div>
        {editButton}
    </div>);
    let leftNavbar = (
      <div className="group-show-left-navbar">
        <div onClick={this._home}>Home</div>
        <div onClick={this._toggleMembers}>Members</div>
      </div>
    );
    return (
      <div className="group-show-navbar group">
        {leftNavbar}
        {rightNavbar}
      </div>
    );
  },

  groupDescription() {
    let memberText;
    if (this.memberOfGroup()) {
      memberText = "Feel free to leave the SportUp group whenever you want";
    } else {
      memberText = "Join us and be the first to know when new Sportups are scheduled";
    }
    return (
      <div className="group-show-description group">
        <h3>{this.state.group.description}</h3>
        <div className="bottom-description">
          <div className="bottom-description-left">
            <div className="login-signup-buttons"><button onClick={this._join} className="login-button">{this._checkAlreadyJoinedText()}</button></div>
            <p> {memberText}</p>
          </div>
          <div className="bottom-description-right">
            <div className="login-signup-buttons"><button onClick={this._toggleMembers} className="login-button">Members!</button></div>
            <p> Click to see a list of this Sportups fantastic members</p>
          </div>
          <div className="bottom-description-rightest">
            {this.makeCreateEventButton()}
          <br />
            {this.makeDestroyButton()}
          </div>
        </div>
      </div>

    );
  },

  groupEvents() {
    if (this.state.group.events && this.state.group.events.length > 0) {
      return (<GroupShowEventIndex population={this.state.members.length}  events={this.state.group.events} />);
    }
  },

  render: function() {
    console.log(this.state.group);
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
                  <div className="side-info-right">{this.state.members.length}
                  </div>
                </li>
                <li>
                  <div className="side-info-left">Upcoming Events:
                  </div>
                  <div className="side-info-right">{this.upcomingEventsCount()}
                  </div>
                </li>
                <li>
                  <div className="side-info-left">Past Events:
                  </div>
                  <div className="side-info-right">{this.pastEventsCount()}
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
          {this.groupDescription()}
          {this.showMembers()}
          {this.groupEvents()}
      </div>
    );
  }

});

module.exports = GroupShow;
