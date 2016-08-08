const Store = require('flux/utils').Store;
const MembershipConstants = require('../constants/membership_constants.js');
const AppDispatcher = require('../dispatcher/dispatcher.js');

const MembershipStore = new Store(AppDispatcher);

let _memberships = {};

const resetMemberships = function (memberships) {
  _memberships = {};
  let membershipsArr = [];
  for (var key in memberships) {
    membershipsArr.push(memberships[key]);
  }

  membershipsArr.forEach(function (membership) {
    _memberships[membership.id] = membership;
  });
};

const setMembership = function (membership) {
  _memberships[membership.id] = membership;
};

const removeMembership = function (membership) {
  delete _memberships[membership.id];
};

MembershipStore.all = function () {
  return Object.keys(_memberships).map(function (membershipId) {
    return _memberships[membershipId];
  });
};

MembershipStore.find = function (id) {
  return _memberships[id];
};

MembershipStore.findAllGroupMembers = function (groupId) {
  let membershipsArr = Object.keys(_memberships).map((key) => {return _memberships[key];});
  return membershipsArr.filter(function (membership) {
    return membership.group_id === parseInt(groupId);
  });
};

MembershipStore.findAllUserGroups = function (userId) {
  let membershipsArr = Object.keys(_memberships).map((key) => {return _memberships[key];});
  return membershipsArr.filter(function (membership) {
    return membership.user_id === parseInt(userId);
  });
};

MembershipStore.__onDispatch = function (payload) {
  switch (payload.actionType) {
    case MembershipConstants.MEMBERSHIPS_RECEIVED:
      resetMemberships(payload.memberships);
      MembershipStore.__emitChange();
      break;
    case MembershipConstants.MEMBERSHIP_RECEIVED:
      setMembership(payload.membership);
      MembershipStore.__emitChange();
      break;
    case MembershipConstants.MEMBERSHIP_REMOVED:
      removeMembership(payload.membership);
      MembershipStore.__emitChange();
      break;
  }
};

module.exports = MembershipStore;
