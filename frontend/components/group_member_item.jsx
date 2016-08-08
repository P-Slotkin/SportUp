var React = require('react');
const Link = require('react-router').Link;

var GroupMemberItem = React.createClass({

  render () {
    const member = this.props.member;
    return (
      <li>
        <Link className="member-item-link" to={`/users/${this.props.member.id}`} >
          <img src={member.image_url}/>
          <p>{member.name}</p>
        </Link>&nbsp;
      </li>
    );
  }

});

module.exports = GroupMemberItem;
