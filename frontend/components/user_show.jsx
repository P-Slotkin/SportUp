const React = require('react');
const ReactDOM = require('react-dom');
const ReactRouter = require('react-router');
const hashHistory = ReactRouter.hashHistory;
const SessionStore = require('../stores/session_store.js');
const UserStore = require('../stores/user_store.js');
const UserActions = require('../actions/user_actions.js');
const DateConstants = require('../constants/date_constants.js');
const GroupStore = require('../stores/group_store.js');
const GroupActions = require('../actions/group_actions.js');
const UserShowGroupIndexItem = require('./user_show_group_index_item.jsx');

const UserShow = React.createClass({

  getInitialState() {
    return { user: "", groups: [] };
  },

  componentDidMount() {
    this.userListener = UserStore.addListener(this._usersChanged);
    UserActions.getUser(this.props.params.userId);
  },

  componentWillUnmount() {
    this.groupListener.remove();
    this.userListener.remove();
  },

  _usersChanged() {
    const user = UserStore.find(this.props.params.userId);
    this.setState({ user: user });
    this.groupListener = GroupStore.addListener(this._groupsChanged);
    GroupActions.fetchGroups();
  },

  _groupsChanged() {
    let that = this;
    let groups = GroupStore.all();
    groups.forEach((group) => {
      group.members = group.members.map((member) => {return member.id;});
    });
    let newGroups = [];
    groups.forEach((group) => {
      if (group.members.includes(that.state.user.id)) {
        newGroups.push(group);
      }
    });
    console.log(newGroups);
    this.setState({ groups: newGroups});
  },

  groupItems() {
    return(
    <div className="user-show-group-index">
      <ul>
        {
          this.state.groups.map(function (group) {
            return (<UserShowGroupIndexItem className="user-show-group-item" key={group.id} group={group} />);
          })
        }
      </ul>
    </div>);
  },

  render(){
    let year;
    let month;
    let day;
    if (this.state.user !== "") {
      year = this.state.user.created_at.slice(0, 4);
      month = this.state.user.created_at.slice(5, 7);
      day = this.state.user.created_at.slice(8, 10);
      if (day.slice(0, 1) === "0") {
        day = day.slice(1, 2);
      }
    } else {
      year = "";
      month = "";
      day = "";
    }
    return(
      <div className="user-show-box">
        <div className="user-show-box-left">
          <div className="user-show-box-left-upper">
            <h1> {this.state.user.name} </h1>
            <div className="user-show-box-left-upper-section">
              <h4> City: </h4>
              <p> {this.state.user.location} </p>
            </div>
            <div className="user-show-box-left-upper-section">
              <h4> Meetup member since: </h4>
              <p> {DateConstants[month]} {day}, {year} </p>
              </div>
            <div className="user-show-box-left-upper-section">
            </div>
          </div>
          <div className="user-show-box-left-groupsection">
            {this.groupItems()}
          </div>
        </div>
        <div className="user-show-box-right">
          <div className="user-show-box-right-profile-pic" >
            <img src={this.state.user.image_url}/>
            <p> Change your profile picture </p>
          </div>
          <div className="user-show-box-right-interests"> <h3> Sport Interests </h3>
            <p> Interests filler </p>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = UserShow;
