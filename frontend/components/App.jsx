const React = require('react');
const ReactDOM = require('react-dom');
const ReactRouter = require('react-router');
const Link = require('react-router').Link;
const SessionStore = require('../stores/session_store');
const SessionActions = require('../actions/session_actions');
const hashHistory = ReactRouter.hashHistory;
const ProfileDropdown = require('./profile_dropdown.jsx');

const App = React.createClass({

  componentDidMount() {
    SessionStore.addListener(this.forceUpdate.bind(this));
  },

  _handleLogout() {
    SessionActions.logOut();
  },

  _login(e) {
    e.preventDefault();
    hashHistory.push("/login");
  },

  _signup(e) {
    e.preventDefault();
    hashHistory.push("/signup");
  },

  _logout(e) {
    e.preventDefault();
    SessionActions.logOut();
  },

  navbar() {
    let loggedInRightNavbar;
    if (SessionStore.isUserLoggedIn()) {
      // SIGN OUT BUTTON? ITS UNDER THE PROFILE TAB ON TOP RIGHT
      loggedInRightNavbar = (<div className="navbar-right-list">
        <div className="navbar-right-list-loggedin"> messages! </div>
        <div className="navbar-right-list-loggedin"> notifcations! </div>
        <ProfileDropdown user={SessionStore.currentUser()}/>
      </div>);

    } else if ( !["/login", "/signup"].includes(this.props.location.pathname)) {
      loggedInRightNavbar = (<div className="navbar-right-list">
        <div className="login-signup-buttons"><Link to="/login">Log in</Link></div>
        <div className="login-signup-buttons"><button onClick={this._signup} className="login-button">Sign up</button></div>
      </div>
      );
    }
    return (
      <nav className="navbar">
        <div className="navbar-left-list">
          <div> <Link to="/" className="header-link"><h1>SportUp</h1></Link> </div>
          <div> Find! </div>
          <div> start! </div>
        </div>
        {loggedInRightNavbar}
      </nav>
    );
  },

  homeDisplay() {
    let greeting;
    if (this.props.location.pathname === "/"){
      if (SessionStore.isUserLoggedIn()) {
        greeting = (<div className="member-greeting">
          <h1> Find a Sportup </h1>
          <h3> 5,000 Sportups nearby </h3>
        </div>);
      } else {
        greeting = ( <div className="notmember-greeting">
          <h1> Sportups are </h1>
          <h3> neighbors getting together to do something, share something... </h3>
          <h3><button className="greeting-signup-button" onClick={this._signup}>Sign me up!</button></h3>
        </div>);
      }
    }
    return (
      <div className="greeting-box">
        {greeting}
      </div>
    );
  },

  render() {
   return (
     <div>
       {this.navbar()}
       {this.homeDisplay()}
       {this.props.children}
     </div>
   );
  }


});

module.exports = App;
