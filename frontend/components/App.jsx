const React = require('react');
const ReactDOM = require('react-dom');
const ReactRouter = require('react-router');
const Link = require('react-router').Link;
const SessionStore = require('../stores/session_store');
const SessionActions = require('../actions/session_actions');
const hashHistory = ReactRouter.hashHistory;

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
        <div> messages! </div>
        <div> notifcations! </div>
        <button className="logout-button" onClick={this._logout}>Log out</button>
      </div>);

    } else if ( !["/login", "/signup"].includes(this.props.location.pathname)) {
      loggedInRightNavbar = (<div className="login-signup-buttons">
        <Link to="/login">Log in</Link>
        <button onClick={this._signup} className="login-button">Sign up</button>
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

  render() {
   return (
     <div>
       {this.navbar()}
       {this.props.children}
     </div>
   );
  }


});

module.exports = App;
