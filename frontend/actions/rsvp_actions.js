const ApiUtil = require('../util/rsvps_api_util.js');
const AppDispatcher = require('../dispatcher/dispatcher.js');
const RsvpConstants = require('../constants/rsvp_constants.js');

module.exports = {

  fetchRsvps () {
    ApiUtil.fetchRsvps(this.receiveAll);
  },

  createRsvp (data, cb) {
    ApiUtil.createRsvp(data, this.receiveRsvp, cb);
  },

  deleteRsvp (id) {
    ApiUtil.deleteRsvp(id, this.removeRsvp);
  },

  receiveAll (rsvps) {
    AppDispatcher.dispatch({
      actionType: RsvpConstants.RSVPS_RECEIVED,
      rsvps: rsvps
    });
  },

  receiveRsvp (rsvp, redirectCb) {
    AppDispatcher.dispatch({
      actionType: RsvpConstants.RSVP_RECEIVED,
      rsvp: rsvp
    });

    if (typeof redirectCb === 'function') {
      redirectCb(rsvp);
    }
  },

  removeRsvp (rsvp) {
    AppDispatcher.dispatch({
      actionType: RsvpConstants.RSVP_REMOVED,
      rsvp: rsvp
    });
  }
};
