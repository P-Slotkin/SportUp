const Store = require('flux/utils').Store;
const GroupConstants = require('../constants/group_constants.js');
const AppDispatcher = require('../dispatcher/dispatcher.js');

const GroupStore = new Store(AppDispatcher);

let _groups = {};

const resetGroups = function (groups) {
  _groups = {};
  let groupsArr = [];
  for (var key in groups) {
    groupsArr.push(groups[key]);
  }

  groupsArr.forEach(function (group) {
    _groups[group.id] = group;
  });
};

const setGroup = function (group) {
  _groups[group.id] = group;
};

const removeGroup = function (group) {
  delete _groups[group.id];
};

GroupStore.all = function () {
  return Object.keys(_groups).map(function (groupId) {
    return _groups[groupId];
  });
};

GroupStore.find = function (id) {
  return _groups[id];
};


GroupStore.__onDispatch = function (payload) {
  switch (payload.actionType) {
    case GroupConstants.GROUPS_RECEIVED:
      resetGroups(payload.groups);
      GroupStore.__emitChange();
      break;
    case GroupConstants.GROUP_RECEIVED:
      setGroup(payload.group);
      GroupStore.__emitChange();
      break;
    case GroupConstants.GROUP_REMOVED:
      removeGroup(payload.group);
      GroupStore.__emitChange();
      break;
  }
};

module.exports = GroupStore;
