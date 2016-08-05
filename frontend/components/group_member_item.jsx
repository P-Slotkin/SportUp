var React = require('react');

var GroupMemberItem = React.createClass({

  render () {
    const member = this.props.member;
    return (
      <li>
        <Link className="member-item-link" to={`/members/${this.props.member.id}`} >
          <img src={member.image_url}/>
          <p>{member.title}</p>
        </Link>&nbsp;
      </li>
    );
  }

});

module.exports = GroupMemberItem;
