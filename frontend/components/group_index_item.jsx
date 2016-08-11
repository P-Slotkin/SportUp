const React = require('react');
const Link = require('react-router').Link;
const GroupActions = require('../actions/group_actions.js');
const hashHistory = require('react-router').hashHistory;

const GroupIndexItem = React.createClass({

  groupTitle() {
    const group = this.props.group;
    let title;
    if (group.title.length > 48) {
      title = group.title.slice(0, 46) + "...";
    } else {
      title = group.title;
    }
    return title;
  },

  render () {
    const group = this.props.group;
    return (
      <li>
        <Link className="group-index-item-link" to={`/groups/${this.props.group.id}`} >
          <img src={group.image_url}/>
          <p>{this.groupTitle()}</p>
        </Link>&nbsp;
      </li>
    );
  }
});

module.exports =GroupIndexItem;
