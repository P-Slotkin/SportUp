const React = require('react');
const ReactDOM = require('react-dom');
const ReactRouter = require('react-router');
const Link = require('react-router').Link;
const SessionActions = require('../actions/session_actions');
const SessionStore = require('../stores/session_store');
const ErrorStore = require('../stores/error_store');
const hashHistory = ReactRouter.hashHistory;



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
    this.sessionListenerToken.remove();
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
    return that.props.location.pathname.slice(1);
  },

  errors() {
    const errors = ErrorStore.errors(this.formType());
    const messages = errors.map( (errorMsg, i) => {
      return <li key={ i }>{ errorMsg }</li>;
    });
    return <ul className='errors'>{ messages }</ul>;
  },

  _handleChange(field, e) {
    return (e) => this.setState({ [field]: e.target.value});
  },

  render() {
    let text;
    let optionText;
    let otherText;
    let pathOtherText;
    if (this.formType() === "login") {
      text = "Log in";
      otherText = "Sign up";
      pathOtherText = "/signup";
      optionText = "Not registered with us yet?";
    } else {
      text = "Sign up";
      otherText = "Log in";
      pathOtherText= "/login";
      optionText= "Already a member?";
    }
    return(
      <div className="login-form">
        <form onSubmit={this.handleSubmit} className="login-form-box">
          { this.errors() }
          <div>
            <h2>{text}</h2>
            <br/>
            <h3>{optionText}
              <Link to={pathOtherText}>{otherText}</Link>
            </h3>
            <br/>
            <label className="login-labels">Email address:
              <br/>
              <input type="text" value={this.state.email}
                onChange={this._handleChange("email")}
                className="login-input"/>
            </label>
            <br/>
            <label className="login-labels">Password:
              <br/>
              <input type="password" value={this.state.password}
                onChange={this._handleChange("password")}
                className="login-input"/>
            </label>
            <input className="login-button" type="submit" value={text}/>
          </div>
        </form>
      </div>

    );
  }

});



module.exports = LoginForm;
