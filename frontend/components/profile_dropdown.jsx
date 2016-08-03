const React = require('react');
const hashHistory = require('react-router').hashHistory;
const ProfileItems = require('./profile_items.jsx');

const ProfileDropdown = React.createClass({

  getInitialState(){
    return {showed: false};
  },

  handleClick(e){
    this.setState({showed: true});
    // e.stopPropagation();
  },

  showItems(){
    if (this.state.showed === true) {
      return <ProfileItems hide={this.disableChildren}/>;
    }
  },

  disableChildren(){
    this.setState({showed: false});
  },

  render() {
    return(
      <div onClick={this.handleClick} className="profile-dropdown-container">Profile
          {this.showItems()}
      </div>
    );
  }

});

module.exports = ProfileDropdown;
