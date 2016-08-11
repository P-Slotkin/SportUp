const React = require('react');
const ReactDOM = require('react-dom');
const ReactRouter = require('react-router');
const Link = require('react-router').Link;
const GroupStore = require('../stores/group_store');
const ErrorStore = require('../stores/error_store');
const hashHistory = ReactRouter.hashHistory;
const GroupActions = require('../actions/group_actions');
const EventStore = require('../stores/event_store');

var GroupEdit = React.createClass({

  getInitialState() {
    let group = GroupStore.find(this.props.params.groupId) || {};
    return { id: group.id, title: group.title, location: group.location, category: group.category, description: group.description, imageFile: null, image_url: group.image_url };
  },

  componentDidMount() {
    this.groupListener = GroupStore.addListener(this._groupChange);
    GroupActions.getGroup(this.props.params.groupId);
    // this.eventListenerToken = EventStore.addListener(this.redirectIfEventMade);
  },

  componentWillUnmount() {
    // this.eventListenerToken.remove();
    this.groupListener.remove();
  },

  _groupChange(){
    const group = GroupStore.find(this.props.params.groupId);
    this.setState( {id: group.id, title: group.title, location: group.location, category: group.category, description: group.description, image_url: group.image_url });
  },

  redirectIfEventMade() {
    let event = EventStore.all()[EventStore.all().length - 1];
    hashHistory.push(`/groups/${event.group_id}`);
    GroupActions.getGroup(this.props.params.groupId);
  },

  handleSubmit(e) {
    e.preventDefault();
    var formData = new FormData();
    formData.append("group[id]", this.state.id);
    formData.append("group[title]", this.state.title);
    formData.append("group[location]", this.state.location);
    formData.append("group[category]", this.state.category);
    formData.append("group[description]", this.state.description);
    formData.append("group[image]", this.state.imageFile);
    GroupActions.editGroup(formData);
    this.setState({ id: "", title: "", location: "", category: "", description: "", imageFile: null, image_url: null});
    hashHistory.push(`/groups/${this.props.params.groupId}`);
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

  titleChange(e) {
    const newTitle = e.target.value;
    this.setState({ title: newTitle });
  },

  categoryChange(e) {
    const newCategory = e.target.value;
    this.setState({ category: newCategory });
  },

  descriptionChange(e) {
    const newDescription = e.target.value;
    this.setState({ description: newDescription });
  },

  locationChange(e) {
    const newLocation = e.target.value;
    this.setState({ location: newLocation });
  },

  descriptionLength() {
    if (this.state.description) {
      return `${this.state.description.length} characters.`;
    } else {
      return "0";
    }
  },


  render: function() {
    let well = "We'll";
    let whats = "What's";
    let groups = "Group's";
    let sportups = "SportUp's";
    let groupShowPage = `/groups/${this.state.id}`;
    return (
      <div className="group-form-page-container">
        <div className="group-form-greeting">
          <h2> SportUp </h2>
          <h1> Edit your own SportUp </h1>
          <h5> {well} help you find the right people to make it happen. Most SportUps start getting members within the first few days. </h5>
        </div>
        <h4>Happy with your group? &nbsp;
          <Link to={groupShowPage}>Return to Group</Link></h4>
        <div className="login-errors">{ this.errors() }</div>
        <div>
          <div className="new-group-form-container">
            <form onSubmit={this.handleSubmit} className="login-form-box">
              <br/>

              <label className="login-labels update-image">Change Group Picture
                <br/>
                <input type="file"
                  onChange={this.updateFile}
                  className="login-input"/>
              </label>
              <p> STEP 1 OF 4 </p>
              <label className="group-form-labels">{whats} your new SportUp {groups} hometown?
                <br/>
                <input type="text" value={this.state.location}
                  onChange={this.locationChange}
                  className="login-input"
                  placeholder="Please input a city"/>
              </label>
              <p> STEP 2 OF 4 </p>
                <label className="group-form-labels">What will your SportUp be about?
                  <br/>
                  <input type="text" value={this.state.category}
                    onChange={this.categoryChange}
                    className="login-input"
                    placeholder="Please input a category (casual/competitive/mixed)"/>
                </label>
              <p> STEP 3 OF 4 </p>
                <label className="group-form-labels">What will your {sportups} name be?
                  <br/>
                  <input type="text" value={this.state.title}
                    onChange={this.titleChange}
                    className="login-input"
                    placeholder="Please choose your SportUp group name"/>
                </label>
              <p> STEP 4 OF 4 </p>
                <label className="group-form-labels">Describe who should join, and what your SportUp will do.
                  <br/>
                  <input type="textarea" value={this.state.description}
                    onChange={this.descriptionChange}
                    className="textarea-input"
                    placeholder="Please describe your group (who should join/what the group will do/etc)"/>
                </label>
                <h6>{this.descriptionLength()} We recommend at least 50 characters in your description</h6>
                <input className="login-button" type="submit" value="Update Group"/>
            </form>
            <div className="update-image-container group-edit-image">
              <img src={this.state.image_url}/>
            </div>
          </div>
        </div>
      </div>
    );
  }

});

module.exports = GroupEdit;
