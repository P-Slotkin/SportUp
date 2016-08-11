const React = require('react');
const ReactDOM = require('react-dom');
const ReactRouter = require('react-router');
const Link = require('react-router').Link;
const SessionActions = require('../actions/session_actions');
const SessionStore = require('../stores/session_store');
const ErrorStore = require('../stores/error_store');
const hashHistory = ReactRouter.hashHistory;
const UserActions = require('../actions/user_actions');
const UserStore = require('../stores/user_store');

var UserEdit = React.createClass({

  getInitialState() {
    let user = UserStore.find(this.props.params.userId) || {};

    return {id: user.id, name: user.name, email: user.email, location: user.location, interests: user.interests, imageFile: null, image_url: user.image_url};
  },

  componentDidMount() {
    this.userListener = UserStore.addListener(this._userChange);
    UserActions.getUser(this.props.params.userId);
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
    this.userListener.remove();
  },

  _userChange() {
    const user = UserStore.find(this.props.params.userId);
    this.setState({ id: user.id, name: user.name, email: user.email, location: user.location, interests: user.interests, image_url: user.image_url });
  },

  handleSubmit(e) {
    e.preventDefault();
    var formData = new FormData();
    formData.append("user[id]", this.state.id);
    formData.append("user[name]", this.state.name);
    formData.append("user[email]", this.state.email);
    formData.append("user[location]", this.state.location);
    formData.append("user[interests]", this.state.interests);
    if (this.state.imageFile !== null) {
      formData.append("user[image]", this.state.imageFile);
    }
    UserActions.editUser(formData);
    this.setState({ id: "", name: "", email: "", location: "", interests: "", imageFile: null, image_url: null});
    hashHistory.push(`/users/${this.props.params.userId}`);
  },

  updateFile(e) {
    var file = e.currentTarget.files[0];
    var fileReader = new FileReader();
    fileReader.onloadend = function() {
      this.setState({ imageFile: file, image_url: fileReader.result });
    }.bind(this);

    if (file) {
      fileReader.readAsDataURL(file);
    }
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
        <div className="login-form edit">
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
              <br/>
                <label className="login-labels update-image">Change Profile Picture
                  <br/>
                    <input type="file"
                      onChange={this.updateFile}
                      className="login-input"/>
                </label>
              <input className="login-button" type="submit" value="Update Profile"/>
            </div>
          </form>
          <div className="update-image-container">
            <img src={this.state.image_url}/>
          </div>
        </div>
      </div>
    );
  }

});

module.exports = UserEdit;
