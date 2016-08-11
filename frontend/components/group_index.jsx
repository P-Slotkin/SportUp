const React = require('react');
const GroupStore = require('../stores/group_store');
const GroupActions = require('../actions/group_actions');
const GroupIndexItem = require('./group_index_item');
const AllGroupsCalendar = require('./all_groups_calendar');
// const GroupForm = require('./group_form.jsx');

module.exports = React.createClass({
  getInitialState () {
    return { allGroups: [], groups: [], search: "", showGroups: true, showCalendar: false};
  },

  componentDidMount () {
    this.groupListener = GroupStore.addListener(this.getGroups);
    GroupActions.fetchGroups();
  },

  componentWillUnmount () {
    this.groupListener.remove();
  },

  getGroups () {
    this.setState({ allGroups: GroupStore.all(), groups: GroupStore.all() });
  },

  searchChange(e) {
    let newSearch = e.target.value || "";
    newSearch = newSearch.toLowerCase();
    const groups = this.state.allGroups;
    let newGroups = groups.filter( (group) => {
      return (
        group.title.toLowerCase().includes(newSearch) ||
        group.description.toLowerCase().includes(newSearch) ||
        group.location.toLowerCase().includes(newSearch)
      );
    });
    this.setState({ groups: newGroups, search: newSearch });
  },

  _toggleGroups(e) {
    e.preventDefault();
    if (this.state.showCalendar){
      this.setState({ showGroups: true, showCalendar: false });
    }
  },

  _clearSearch(e) {
    e.preventDefault();
    if (this.state.search !== "") {
      this.setState({ search: "" });
    }
    this.setState({ groups: this.state.allGroups });
  },

  _toggleCalendar(e) {
    e.preventDefault();
    if (this.state.showGroups){
      this.setState({ showGroups: false, showCalendar: true });
    }
  },

  showSearchRightButtons() {
    if (this.state.showGroups) {
      return (
        <div className="search-buttons">
          <button className="search-button-grayed pointer" onClick={this._toggleGroups}>Groups</button>
          <button className="search-button pointer" onClick={this._toggleCalendar}>Calendar</button>
        </div>
      );
    } else {
      return (
        <div className="search-buttons">
          <button className="search-button pointer" onClick={this._toggleGroups}>Groups</button>
          <button className="search-button-grayed pointer" onClick={this._toggleCalendar}>Calendar</button>
        </div>
      );
    }
  },

  showCalendarOrGroups() {
    if (this.state.showCalendar) {
      return (
        <AllGroupsCalendar currentDate={new Date().toJSON()} groups={this.state.groups}/>
        );
    } else {
      return (
        <ul>
          {
            this.state.groups.map(function (group) {
              return (<GroupIndexItem key={group.id} group={group} />);
            })
          }
        </ul>
      );
    }
  },

  render () {
    return (
      <div className="group-index">
        <div className="search-bar-container group">
          <div className="search-bar-left">
            <div className="search-input">
              <input type="text" value={this.state.search}
                onChange={this.searchChange}
                className="search-input-field"
                placeholder="All SportUps"/>
              <img onClick={this._clearSearch} className="pointer" src={window.imageAssets.searchImage}/>
            </div>
          </div>
          <div className="search-bar-right">
            {this.showSearchRightButtons()}
          </div>
        </div>
        {this.showCalendarOrGroups()}
      </div>
    );
  }
});
