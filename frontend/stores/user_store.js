const Store = require('flux/utils').Store;
const UserConstants = require('../constants/user_constants.js');
const AppDispatcher = require('../dispatcher/dispatcher.js');

const UserStore = new Store(AppDispatcher);

let _users = {};

const resetUsers = function (users) {
  _users = {};
  let usersArr = [];
  for (var key in users) {
    usersArr.push(users[key]);
  }

  usersArr.forEach(function (user) {
    _users[user.id] = user;
  });
};

const setUser = function (user) {
  _users[user.id] = user;
};

const removeUser = function (user) {
  delete _users[user.id];
};

UserStore.all = function () {
  return Object.keys(_users).map(function (userId) {
    return _users[userId];
  });
};

UserStore.findAllGroupMembers = function (groupId) {
  let usersArr = Object.keys(_users).map((key) => {return _users[key];});
  return usersArr.filter(function (user) {
    return user.user_id === parseInt(groupId);
  });
};

UserStore.find = function (id) {
  return _users[id];
};


UserStore.__onDispatch = function (payload) {
  switch (payload.actionType) {
    case UserConstants.USERS_RECEIVED:
      resetUsers(payload.users);
      UserStore.__emitChange();
      break;
    case UserConstants.USER_RECEIVED:
      setUser(payload.user);
      UserStore.__emitChange();
      break;
    case UserConstants.USER_REMOVED:
      removeUser(payload.user);
      UserStore.__emitChange();
      break;
  }
};

module.exports = UserStore;
