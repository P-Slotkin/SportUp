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

  greeting() {
    if (SessionStore.isUserLoggedIn()) {
      // SIGN OUT BUTTON? ITS UNDER THE PROFILE TAB ON TOP RIGHT
      return (
        <nav className="logout-button">
          <button onClick={this._logout}>Log out</button>
        </nav>
      );
    } else if ( !["/login", "/signup"].includes(this.props.location.pathname)) {
      return (
        <nav className="login-signup-buttons">
          <button onClick={this._login}>Log in</button>
          <button onClick={this._signup}>Sign up</button>
        </nav>
      );
    }
  },

  render() {
   return (
     <div>
       <header>
         <Link to="/" className="header-link"><h1>SportUp</h1></Link>
         {this.greeting()}
       </header>
       {this.props.children}
     </div>
   );
  }


});

module.exports = App;
