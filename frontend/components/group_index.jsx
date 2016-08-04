const React = require('react');
const GroupStore = require('../stores/group_store.js');
const GroupActions = require('../actions/group_actions.js');
const GroupIndexItem = require('./group_index_item.jsx');
// const GroupForm = require('./group_form.jsx');

module.exports = React.createClass({
  getInitialState () {
    return { groups: [] };
  },

  componentDidMount () {
    this.groupListener = GroupStore.addListener(this.getGroups);
    GroupActions.fetchGroups();
  },

  componentWillUnmount () {
    this.groupListener.remove();
  },

  getGroups () {
    this.setState({groups: GroupStore.all()});
  },

  render () {
    return (
      <div className="group-index">
        <ul>
          {
            this.state.groups.map(function (group) {
              return (<GroupIndexItem key={group.id} group={group} />);
            })
          }
        </ul>


      </div>
    );
  }
});
