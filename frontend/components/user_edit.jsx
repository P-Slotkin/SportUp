const React = require('react');
const ReactDOM = require('react-dom');
const ReactRouter = require('react-router');
const Link = require('react-router').Link;
const SessionActions = require('../actions/session_actions');
const SessionStore = require('../stores/session_store');
const ErrorStore = require('../stores/error_store');
const hashHistory = ReactRouter.hashHistory;
const UserActions = require('../actions/user_actions');

var UserEdit = React.createClass({

  getInitialState() {
    let user = SessionStore.currentUser();
    return {id: user.id, name: user.name, email: user.email, location: user.location, interests: user.interests};
  },

  componentDidMount() {
    this.errorListenerToken = ErrorStore.addListener(this.forceUpdate.bind(this));
    if (SessionStore.isUserLoggedIn()){
      if (SessionStore.currentUser().id !== parseInt(this.props.params.userId)) {
        hashHistory.push("/");
        return;
      }
    } else {
      hashHistory.push("/");
    }
  },

  componentWillUnmount() {
    this.errorListenerToken.remove();
  },

  handleSubmit(e) {
    e.preventDefault();

    UserActions.editUser(this.state);
    this.setState({ id: "", name: "", email: "", location: "", interests: ""});
    hashHistory.push(`/users/${this.state.id}`);
  },

  errors() {
    const errors = ErrorStore.errors('');
    const messages = errors.map( (errorMsg, i) => {
      return <li key={ i }>{ errorMsg }</li>;
    });
    return <ul className='errors'>{ messages }</ul>;
  },

  _handleChange(field, e) {
    return (e) => this.setState({ [field]: e.target.value});
  },

  render: function() {
    let user = SessionStore.currentUser();
    let userShowPage = `/users/${user.id}`;
    return (
      <div>
        <div className="login-errors">{ this.errors() }</div>
        <div className="login-form">
          <form onSubmit={this.handleSubmit} className="login-form-box">
            <div>
              <h2>Edit Your Profile</h2>
              <br/>
              <h3>Happy with your profile? &nbsp;
                <Link to={userShowPage}>Return to Profile Page</Link>
              </h3>
              <br/>
              <label className="login-labels">Full name (this is public):
                  <br/>
                  <input type="text" value={this.state.name}
                    onChange={this._handleChange("name")}
                    className="login-input"/>
                  <br/>
                </label>
              <label className="login-labels">Email address:
                <br/>
                <input type="text" value={this.state.email}
                  onChange={this._handleChange("email")}
                  className="login-input"/>
              </label>
              <br/>
              <label className="login-labels">City:
                <br/>
                <input type="text" value={this.state.location}
                  onChange={this._handleChange("location")}
                  className="login-input"/>
              </label>
              <br/>
              <label className="login-labels">Interests: (ie. basketball, soccer, football)
                <br/>
                <input type="text" value={this.state.interests}
                  onChange={this._handleChange("interests")}
                  className="login-input"/>
              </label>
              <input className="login-button" type="submit" value="Update Profile"/>
            </div>
          </form>
        </div>
      </div>
    );
  }

});

module.exports = UserEdit;
