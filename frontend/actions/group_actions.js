const ApiUtil = require('../util/groups_api_util.js');
const AppDispatcher = require('../dispatcher/dispatcher.js');
const GroupConstants = require('../constants/group_constants.js');

module.exports = {
  fetchGroups () {
    ApiUtil.fetchGroups(this.receiveAll);
  },

  getGroup (id) {
    ApiUtil.getGroup(id, this.receiveGroup);
  },

  createGroup (data, cb) {
    ApiUtil.createGroup(data, this.receiveGroup, cb);
  },

  editGroup (data) {
    ApiUtil.updateGroup(data, this.receiveGroup);
  },

  deleteGroup (id) {
    ApiUtil.deleteGroup(id, this.removeGroup);
  },

  receiveAll (groups) {
    AppDispatcher.dispatch({
      actionType: GroupConstants.GROUPS_RECEIVED,
      groups: groups
    });
  },

  receiveGroup (group, redirectCb) {
    AppDispatcher.dispatch({
      actionType: GroupConstants.GROUP_RECEIVED,
      group: group
    });

    if (typeof redirectCb === 'function') {
      redirectCb(group);
    }
  },

  removeGroup (group) {
    AppDispatcher.dispatch({
      actionType: GroupConstants.GROUP_REMOVED,
      group: group
    });
  }
};
