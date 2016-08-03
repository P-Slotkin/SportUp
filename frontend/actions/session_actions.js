const AppDispatcher = require('../dispatcher/dispatcher.js');
const SessionConstants = require('../constants/session_constants.js');
const SessionApiUtil = require('../util/session_api_util.js');
const ErrorActions = require('./error_actions.js');
const ReactRouter = require('react-router');
const Router = ReactRouter.Router;
const Route = ReactRouter.Route;
const hashHistory = require('react-router').hashHistory;

const SessionActions= {
  signUp(data) {
    SessionApiUtil.signUp(
      data,
      SessionActions.receiveCurrentUser,
      ErrorActions.setErrors);
  },

  logIn(data) {
    SessionApiUtil.logIn(
      data,
      SessionActions.receiveCurrentUser,
      ErrorActions.setErrors);
  },

  logOut() {
    SessionApiUtil.logOut(SessionActions.removeCurrentUser);
  },

  fetchCurrentUser(complete){
    SessionApiUtil.fetchCurrentUser(
      SessionActions.receiveCurrentUser, complete);
  },

  receiveCurrentUser(currentUser) {
    AppDispatcher.dispatch({
      actionType: SessionConstants.LOGIN,
      currentUser: currentUser
    });
  },

  removeCurrentUser() {
    AppDispatcher.dispatch({
      actionType: SessionConstants.LOGOUT
    });
    hashHistory.push("/login");
  }
};

module.exports = SessionActions;
