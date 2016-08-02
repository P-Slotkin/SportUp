const AppDispatcher = require('../dispatcher/dispatcher.js');
const Store = require('flux/utils').Store;
const SessionConstants = require('../constants/session_constants.js');
const SessionStore = new Store(AppDispatcher);

let _currentUser = {};
let _currentUserFetched = false;

const _login = function(currentUser) {
  _currentUser = currentUser;
  _currentUserFetched = true;
};

const _logout = function() {
  _currentUser = {};
  _currentUserFetched = true;
};

SessionStore.__onDispatch = function(payload) {
  switch (payload.actionType) {
    case SessionConstants.LOGIN:
      _login(payload.currentUser);
      SessionStore.__emitChange();
      break;
    case SessionConstants.LOGOUT:
      _logout();
      SessionStore.__emitChange();
      break;
  }
};

SessionStore.currentUser = function() {
  return Object.assign({}, _currentUser);
};

SessionStore.currentUserFetched = function() {
  return !!_currentUserFetched;
};

SessionStore.isUserLoggedIn = function() {
  return !!_currentUser.id;
};

module.exports = SessionStore;
