const React = require('react');
const ReactDOM = require('react-dom');
const ReactRouter = require('react-router');
const Link = require('react-router').Link;
const SessionStore = require('../stores/session_store');
const SessionActions = require('../actions/session_actions');
const hashHistory = ReactRouter.hashHistory;
const ProfileDropdown = require('./profile_dropdown.jsx');
const GroupIndex = require('./group_index.jsx');
const Footer = require('./footer.jsx');

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

  _demo(e) {
    e.preventDefault();
    SessionActions.logIn({ email: 'russell@email.com', password:'starwars' });
  },

  _signup(e) {
    e.preventDefault();
    hashHistory.push("/signup");
  },

  _logout(e) {
    e.preventDefault();
    SessionActions.logOut();
  },

  _newGroup(e) {
    e.preventDefault();
    hashHistory.push("/groupform");
  },

  _home(e) {
    e.preventDefault();
    hashHistory.push("/");
  },

  navbar() {
    let loggedInRightNavbar;
    if (SessionStore.isUserLoggedIn()) {
      loggedInRightNavbar = (<div className="navbar-right-list">
        <ProfileDropdown user={SessionStore.currentUser()}/>
      </div>);

    } else if ( !["/login", "/signup"].includes(this.props.location.pathname)) {
      loggedInRightNavbar = (<div className="navbar-right-list">
        <div className="login-signup-buttons"><button onClick={this._demo} className="login-button">Demo</button></div>
        <div className="login-signup-buttons"><button onClick={this._login} className="login-button">Log in</button></div>
        <div className="login-signup-buttons"><button onClick={this._signup} className="login-button">Sign up</button></div>
      </div>
      );
    }
    return (
      <nav className="navbar">
        <div className="navbar-left-list">
          <div className="navbar-logo pointer" onClick={this._home}><img src={window.imageAssets.redLogo} /></div>
          <div> <h1 onClick={this._home}>Find</h1> <p>a SportUp group</p> </div>
          <div onClick={this._newGroup}> <h1>Start</h1> <p>a SportUp group</p></div>
        </div>
        {loggedInRightNavbar}
      </nav>
    );
  },

  homeDisplay() {
    let greeting;
    let groupIndex;
    if (this.props.location.pathname === "/"){
      groupIndex = <GroupIndex />;
      if (SessionStore.isUserLoggedIn()) {
        greeting = (<div className="member-greeting">
          <h1> Find a SportUp </h1>
          <h3> 5,000 SportUps nearby </h3>
        </div>);
      } else {
        greeting = ( <div className="notmember-greeting">
          <h1> SportUps are </h1>
          <h3> neighbors getting together to do something, share something... </h3>
          <h3><button className="greeting-signup-button" onClick={this._signup}>Sign me up!</button></h3>
        </div>);
      }
    }
    return (
      <div>
        <div className="greeting-box">
          {greeting}
        </div>
        {groupIndex}
      </div>
    );
  },

  render() {
   return (
     <div className="large-container">
       {this.navbar()}
       {this.homeDisplay()}
       {this.props.children}
       <div className="largest-footer-container">
         {<Footer/>}
       </div>
     </div>
   );
  }


});

module.exports = App;
