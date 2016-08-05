const ApiUtil = require('../util/memberships_api_util.js');
const AppDispatcher = require('../dispatcher/dispatcher.js');
const MembershipConstants = require('../constants/membership_constants.js');

module.exports = {

  fetchMemberships () {
    ApiUtil.fetchMemberships(this.receiveAll);
  },

  createMembership (data, cb) {
    ApiUtil.createMembership(data, this.receiveMembership, cb);
  },

  deleteMembership (id) {
    ApiUtil.deleteMembership(id, this.removeMembership);
  },

  receiveAll (memberships) {
    AppDispatcher.dispatch({
      actionType: MembershipConstants.MEMBERSHIPS_RECEIVED,
      memberships: memberships
    });
  },

  receiveMembership (membership, redirectCb) {
    AppDispatcher.dispatch({
      actionType: MembershipConstants.GROUP_RECEIVED,
      membership: membership
    });

    if (typeof redirectCb === 'function') {
      redirectCb(membership);
    }
  },

  removeMembership (membership) {
    AppDispatcher.dispatch({
      actionType: MembershipConstants.GROUP_REMOVED,
      membership: membership
    });
  }
};
