const React = require('react');
const Link = require('react-router').Link;
const GroupActions = require('../actions/group_actions.js');
const hashHistory = require('react-router').hashHistory;

const GroupIndexItem = React.createClass({


  render () {
    const group = this.props.group;
    return (
      <li>
        <Link to={`/groups/${this.props.group.id}`}>
          {group.title}
        </Link>&nbsp;
      </li>
    );
  }
});

module.exports =GroupIndexItem;
