const React = require('react');
const ReactDOM = require('react-dom');
const ReactRouter = require('react-router');
const hashHistory = ReactRouter.hashHistory;
const SessionStore = require('../stores/session_store.js');

const UserShow = React.createClass({

  render(){
    return(
      <div className="user-show-box">
        <div className="user-show-box-left">
          <div className="user-show-box-left-upper">
            <h1> {SessionStore.currentUser().name} </h1>
            <div className="user-show-box-left-upper-section">
              <h4> Location: </h4>
              <p> location filler </p>
            </div>
            <div className="user-show-box-left-upper-section">
              <h4> Meetup member since: </h4>
              <p> August, 2016 </p>
              </div>
            <div className="user-show-box-left-upper-section">
              <h4> Networks: </h4>
              <p> Network filler </p>
            </div>
          </div>
          <div className="user-show-box-left-groupsection">
            <p> You are not in any groups yet. </p>
          </div>
          <div className="user-show-box-left-bottom">
            <p> Looking to post a greeting? Start a conversation instead. </p>
          </div>
        </div>
      </div>
    );
  }

  // <div className="user-show-box-right">
  //   <div className="profile-picture">
  //     <h6> picture filler </h6>
  //   </div>
  //   <div className="user-show-box-right-description">
  //     <h6> Description: </h6>
  //     <p> filler </p>
  //   </div>
  // </div>
});

module.exports = UserShow;
