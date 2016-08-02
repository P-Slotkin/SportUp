const React = require('react');
const Link = require('react-router').Link;
const SessionActions = require('../actions/session_actions');
const SessionStore = require('../stores/session_store');
const ErrorStore = require('../stores/error_store');



const LoginForm = React.createClass({

  getInitialState() {
    return { email: "", password: ""};
  },

  componentDidMount() {
    this.errorListenerToken = ErrorStore.addListener(this.forceUpdate.bind(this));
    this.sessionListenerToken = SessionStore.addListener(this.redirectIfLoggedIn);
  },

  componentWillUnmount() {
    this.errorListenerToken.remove();
    this.sessionListener.remove();
  },

  redirectIfLoggedIn() {
    if (SessionStore.isUserLoggedIn()) {
      hashHistory.push("/");
    }
  },

  handleSubmit(e) {
    e.preventDefault();

    if (this.props.location.pathname === "/login") {
      SessionActions.logIn(this.state);
    } else {
      SessionActions.signUp(this.state);
    }
  },

  formType() {
    let that = this;
    // console.log(this.props);
    return that.props.location.pathname.slice(1);
  },

  errors() {
    const errors = ErrorStore.errors(this.formType());
    const messages = errors.map( (errorMsg, i) => {
      return <li key={ i }>{ errorMsg }</li>;
    });
    return <ul>{ messages }</ul>;
  },

  _handleChange(field, e) {
    return (e) => this.setState({ [field]: e.target.value});
  },

  render() {
    let text;
    if (this.formType() === "login") {
      text = "Log in";
    } else {
      text = "Sign up";
    }
    return(
      <div className="login-form">
        <form onSubmit={this.handleSubmit} className="login-form-box">
          { this.errors() }
          <div className="login-form">
            <br/>
            <label>Email address:
              <br/>
              <input type="text" value={this.state.email}
                onChange={this._handleChange("email")}
                className="login-input"/>
            </label>
            <br/>
            <label>Password:
              <br/>
              <input type="password" value={this.state.password}
                onChange={this._handleChange("password")}
                className="login-input"/>
            </label>
            <input type="submit" value={text}/>
          </div>
        </form>
      </div>

    );
  }

});



module.exports = LoginForm;
