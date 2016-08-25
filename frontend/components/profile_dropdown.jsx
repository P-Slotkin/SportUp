const React = require('react');
const hashHistory = require('react-router').hashHistory;
const ProfileItems = require('./profile_items.jsx');
const SessionStore = require('../stores/session_store.js');

const ProfileDropdown = React.createClass({

  getInitialState(){
    return {showed: false};
  },

  componentDidMount(){
    window.addEventListener('click', this.disableChildren)
  },

  handleClick(e){
    e.stopPropagation();
    if (this.state.showed) {
      this.setState({ showed: false });
    } else {
      this.setState({showed: true});
    }
  },

  showItems(){
    if (this.state.showed === true) {
      return <ProfileItems user={this.props.user} hide={this.disableChildren}/>;
    }
  },

  disableChildren(){
    this.setState({showed: false});
  },

  render() {
    let name;
    if (SessionStore.currentUser().name) {
      name = SessionStore.currentUser().name;
    } else {
      name = Profile;
    }
    return(
      <div onClick={this.handleClick} className="profile-dropdown-container">{name}
          {this.showItems()}
      </div>
    );
  }

});

module.exports = ProfileDropdown;
