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

  _profile(e) {
    e.preventDefault();
    hashHistory.push(`/users/${this.props.user.id}`);
  },

  stopProp(e){
    e.stopPropagation();
  },

  _home(e){
    e.preventDefault();
    hashHistory.push("/");
  },

  render(){
    return(
      <div className="dropdown-items" onClick={this.stopProp}>
        <div className="dropdown-left">
          <h3> You can view your SportUp groups on your profile page </h3>
          <h4 className="dropdown-home-button" onClick={this._home}> Search for SportUp groups > </h4>
        </div>
        <ul >
          <li onClick={this._profile}>Profile</li>
          <li>Edit</li>
          <li onClick={this._logout}>Log out</li>
        </ul>
      </div>
    );
  }

});

module.exports = ProfileItems;
