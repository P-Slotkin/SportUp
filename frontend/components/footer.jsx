const React = require('react');
const SessionStore = require('../stores/session_store.js');
const ReactRouter = require('react-router');
const Link = require('react-router').Link;
const SessionActions = require('../actions/session_actions.js');
const hashHistory = ReactRouter.hashHistory;
const ErrorStore = require('../stores/error_store.js');

const Footer = React.createClass({

  _startSportup(e) {
    e.preventDefault();
    hashHistory.push("/groupform");
  },

  _logout(e) {
    if (SessionStore.isUserLoggedIn()) {
      e.preventDefault();
      SessionActions.logOut();
    } else {
      e.preventDefault();
      hashHistory.push("/login");
    }
  },

  render: function() {
    let loginLink;
    let loginText;
    if (SessionStore.isUserLoggedIn()) {
      loginLink = "/";
      loginText = "Log out";
    } else {
      loginLink = "/login";
      loginText = "Log in";
    }
    return (
      <div className="footer-container">
        <div className="footer-container-topbar">
          <p onClick={this._startSportup} className="footer-container-topbar-left">Start a SportUp Group</p>
          <p onClick={this._logout} className="footer-container-topbar-right">{loginText}</p>
        </div>
        <div className="footer-container-bottom">
          <h5> 2016 SportUp</h5>
        </div>
      </div>
    );
  }

});

module.exports = Footer;
