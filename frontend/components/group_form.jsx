const React = require('react');
const hashHistory = require('react-router').hashHistory;
const GroupActions = require('../actions/group_actions.js');
const GroupStore = require('../stores/group_store.js');

const GroupForm = React.createClass({

  getInitialState() {
    return ({ title: "", location: "", category: "", description: "" });
  },

  componentDidMount() {
    this.groupListenerToken = GroupStore.addListener(this.redirectIfGroupMade);
  },

  componentWillUnmount() {
    this.groupListenerToken.remove();
  },

  redirectIfGroupMade() {
    let group = GroupStore.all()[GroupStore.all().length - 1];
    hashHistory.push(`/groups/${group.id}`);
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

  handleSubmit(e) {
    e.preventDefault();
    const groupData = this.state;
    GroupActions.createGroup(groupData, (group) => {
      debugger;
      hashHistory.push(`/groups/${group.id}`);
    });
    this.setState({ title: "", location: "", category: "", description: "" });
  },

  handleCancel(e) {
    e.preventDefault();
    this.navigateToSearch();
  },

  render: function() {
    let well = "We'll";
    let whats = "What's";
    let groups = "Group's";
    let sportups = "SportUp's";
    return (
      <div className="group-form-page-container">
        <div className="group-form-greeting">
          <h2> SportUp </h2>
          <h1> Start your own SportUp </h1>
          <h5> {well} help you find the right people to make it happen. Most SportUps start getting members within the first few days. </h5>
        </div>
        <h4> Your SportUp is free for the first month! </h4>
        <div className="new-group-form-container">
          <form onSubmit={this.handleSubmit}>
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
              <h6>We recommend at least 50 characters in your description</h6>
              <input className="login-button" type="submit" value="next"/>
          </form>
        </div>
      </div>
    );
  }

});

module.exports = GroupForm;
