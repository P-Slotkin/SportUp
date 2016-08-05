const ApiUtil = require('../util/users_api_util.js');
const AppDispatcher = require('../dispatcher/dispatcher.js');
const UserConstants = require('../constants/user_constants.js');

module.exports = {
  fetchUsers () {
    ApiUtil.fetchUsers(this.receiveAll);
  },

  getUser (id) {
    ApiUtil.getUser(id, this.receiveUser);
  },

  editUser (data) {
    ApiUtil.updateUser(data, this.receiveUser);
  },

  receiveAll (users) {
    AppDispatcher.dispatch({
      actionType: UserConstants.USERS_RECEIVED,
      users: users
    });
  },

  receiveUser (user, redirectCb) {
    AppDispatcher.dispatch({
      actionType: UserConstants.USER_RECEIVED,
      user: user
    });

    if (typeof redirectCb === 'function') {
      redirectCb(user);
    }
  }
};
