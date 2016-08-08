const React = require('react');
const hashHistory = require('react-router').hashHistory;
const GroupActions = require('../actions/group_actions');
const GroupStore = require('../stores/group_store.js');
const MembershipStore = require('../stores/membership_store.js');
const Link = require('react-router').Link;
const MembershipActions = require('../actions/membership_actions');
const SessionStore = require('../stores/session_store');
const MembershipIndexItem = require('./membership_index_item');
const UserStore = require('../stores/user_store.js');
const UserActions = require('../actions/user_actions');
const GroupMemberItem = require('./group_member_item');


const GroupShow = React.createClass({

  getInitialState() {
    MembershipActions.fetchMemberships();
    UserActions.fetchUsers();
    const members = [];
    const memberships = MembershipStore.findAllGroupMembers(this.props.params.groupId);
    const group = GroupStore.find(this.props.params.groupId) || {} ;
    return { group: group, memberships: memberships, members: members, showMembers: false };
  },

  componentDidMount() {
    this.membershipListener = MembershipStore.addListener(this._membershipChanged);
    this.groupListener = GroupStore.addListener(this._groupChanged);
    this.userListener = UserStore.addListener(this._membersChanged);
    GroupActions.getGroup(this.props.params.groupId);
    MembershipActions.fetchMemberships();
    UserActions.fetchUsers();
  },

  componentWillUnmount() {
    this.groupListener.remove();
    this.membershipListener.remove();
    this.userListener.remove();
  },

  _membersChanged(){
    const members = this.state.memberships.map((membership) => {
      return UserStore.find(membership.user_id);
    });
    this.setState({ members: members });
  },

  _groupChanged() {
    const group = GroupStore.find(this.props.params.groupId);
    this.setState({ group: group });
  },

  _membershipChanged() {
    const memberships = MembershipStore.findAllGroupMembers(this.props.params.groupId);
    this.setState({ memberships: memberships });
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
    this.state.memberships.forEach((membership) => {
      if (membership.user_id === SessionStore.currentUser().id) {
        memberOfGroup = true;
      }
    });
    if (memberOfGroup === true) {
      return true;
    } else {
      return false;
    }
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
    this.state.memberships.forEach((membership) => {
      if (membership.user_id === SessionStore.currentUser().id) {
        left = true;
        MembershipActions.deleteMembership(membership.id);
        MembershipActions.fetchMemberships();
      }
    });
    if (left !== true) {
      MembershipActions.createMembership( { user_id: SessionStore.currentUser().id, group_id: this.props.params.groupId });
      MembershipActions.fetchMemberships();
    }
    UserActions.fetchUsers();
  },

  _home() {
    hashHistory.push("/");
  },

  showMembers() {
    if (this.state.showMembers) {
      return (<div className="member-index-container">
        <ul>
          {
            this.state.members.map(function (member) {
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
    let rightNavbar = (
      <div className="group-show-right-navbar">
        <div className="login-signup-buttons"><button onClick={this._join} className="login-button">{this._checkAlreadyJoinedText()}</button></div>
      </div>);
    let leftNavbar = (
      <div className="group-show-left-navbar">
        <div onClick={this._home}>Home</div>
        <div onClick={this._toggleMembers}>Members</div>
      </div>
    );
    return (
      <div className="group-show-navbar">
        {leftNavbar}
        {rightNavbar}
      </div>
    );
  },

  groupMembers() {
    this.state.memberships.map( (membership) => {
      return <MembershipIndexItem key={membership.id} membership={membership} />;
    });
  },

  groupDescription() {
    let memberText;
    if (this.memberOfGroup()) {
      memberText = "Feel free to leave the SportUp group whenever you want";
    } else {
      memberText = "Join us and be the first to know when new Sportups are scheduled";
    }
    return (
      <div className="group-show-description">
        <h3>{this.state.group.description}</h3>
        <div className="bottom-description">
          <div className="bottom-description-left">
            <div className="login-signup-buttons"><button onClick={this._join} className="login-button">{this._checkAlreadyJoinedText()}</button></div>
            <p> {memberText}</p>
          </div>
          <div className="bottom-description-right">
            <div className="login-signup-buttons"><button onClick={this._toggleMembers} className="login-button">Members!</button></div>
            <p> Look to see a list of this Sportups fantastic members</p>
          </div>
          <div className="bottom-description-rightest">
            {this.makeDestroyButton()}
          </div>
        </div>
      </div>

    );
  },

  render: function() {


    return (
      <div className="group-show-container">
        <h1>{this.state.group.title}</h1>
          {this.groupNavbar()}
          <div className="side-info-filler">
            <div className="side-info-group-pic">
              <img src={this.state.group.image_url}/>
            </div>
            <div className="side-info-attributes">
              <h3> {this.state.group.location} </h3>
              <ul>
                <li>
                  <div className="side-info-left">Athletes:
                  </div>
                  <div className="side-info-right">{this.state.members.length}
                  </div>
                </li>
                <li>
                  <div className="side-info-left">Upcoming SportUps:
                  </div>
                </li>
                <li>
                  <div className="side-info-left">Past SportUps:
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
          {this.groupDescription()}
          {this.showMembers()}
      </div>
    );
  }

});

module.exports = GroupShow;
