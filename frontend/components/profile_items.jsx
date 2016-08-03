const React = require('react');
const ReactDOM = require('react-dom');
const ReactRouter = require('react-router');
const hashHistory = ReactRouter.hashHistory;
const SessionActions = require('../actions/session_actions.js');

const ProfileItems = React.createClass({

  componentDidMount(){
    this.token = window.addEventListener("click", this.props.hide);
  },

  componentWillUnmount(){
    this.token.remove();
  },

  _logout(e) {
    e.preventDefault();
    this.props.hide();
    SessionActions.logOut();
  },

  stopProp(e){
    e.stopPropagation();
  },

  render(){
    return(
      <div className="dropdown-items" onClick={this.stopProp}>
        <div className="dropdown-left">
          <h3> You are not a member of any Sportup Groups yet. </h3>
          <h4> Find your sportup group! </h4>
        </div>
        <ul >
          <li>Profile</li>
          <li>Settings</li>
          <li onClick={this._logout}>Log out</li>
        </ul>
      </div>
    );
  }

});

module.exports = ProfileItems;
