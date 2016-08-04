const React = require('react');
const hashHistory = require('react-router').hashHistory;
const GroupActions = require('../actions/group_actions');
const GroupStore = require('../stores/group_store.js');
const Link = require('react-router').Link;


const GroupShow = React.createClass({

  getInitialState() {
    const group = GroupStore.find(this.props.params.groupId) || {} ;
    return { group: group };
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
    this.setState({ group });
  },

  _join() {

  },

  _home() {
    hashHistory.push("/");
  },

  _members() {

  },

  groupNavbar(){
    let rightNavbar = (
      <div className="group-show-right-navbar">
        <div className="login-signup-buttons"><button onClick={this._join} className="login-button">Join us!</button></div>
      </div>);
    let leftNavbar = (
      <div className="group-show-left-navbar">
        <div onClick={this._home}>Home</div>
        <div onClick={this._members}>Members</div>
      </div>
    );
    return (
      <div className="group-show-navbar">
        {leftNavbar}
        {rightNavbar}
      </div>
    );
  },

  groupDescription() {
    return (
      <div className="group-show-description">
        <h3>{this.state.group.description}</h3>
        <div className="bottom-description">
          <div className="bottom-description-left">
            <div className="login-signup-buttons"><button onClick={this._join} className="login-button">Join us!</button></div>
            <p> Join us and be the first to know when new Sportups are scheduled</p>
          </div>
          <div className="bottom-description-right">
            <div className="login-signup-buttons"><button onClick={this._members} className="login-button">Members!</button></div>
            <p> Look to see a list of this Sportups fantastic members</p>
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
          <div className="side-info-filler" />
          {this.groupDescription()}
      </div>
    );
  }

});

module.exports = GroupShow;
