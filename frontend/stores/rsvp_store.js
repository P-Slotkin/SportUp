const Store = require('flux/utils').Store;
const RsvpConstants = require('../constants/rsvp_constants.js');
const AppDispatcher = require('../dispatcher/dispatcher.js');

const RsvpStore = new Store(AppDispatcher);

let _rsvps = {};

const resetRsvps = function (rsvps) {
  _rsvps = {};
  let rsvpsArr = [];
  for (var key in rsvps) {
    rsvpsArr.push(rsvps[key]);
  }

  rsvpsArr.forEach(function (rsvp) {
    _rsvps[rsvp.id] = rsvp;
  });
};

const setRsvp = function (rsvp) {
  _rsvps[rsvp.id] = rsvp;
};

const removeRsvp = function (rsvp) {
  delete _rsvps[rsvp.id];
};

RsvpStore.all = function () {
  return Object.keys(_rsvps).map(function (rsvpId) {
    return _rsvps[rsvpId];
  });
};

RsvpStore.find = function (id) {
  return _rsvps[id];
};

RsvpStore.findAllEventMembers = function (eventId) {
  let rsvpsArr = Object.keys(_rsvps).map((key) => {return _rsvps[key];});
  return rsvpsArr.filter(function (rsvp) {
    return rsvp.event_id === parseInt(eventId);
  });
};

RsvpStore.findAllUserEvents = function (userId) {
  let rsvpsArr = Object.keys(_rsvps).map((key) => {return _rsvps[key];});
  return rsvpsArr.filter(function (rsvp) {
    return rsvp.user_id === parseInt(userId);
  });
};

RsvpStore.__onDispatch = function (payload) {
  switch (payload.actionType) {
    case RsvpConstants.RSVPS_RECEIVED:
      resetRsvps(payload.rsvps);
      RsvpStore.__emitChange();
      break;
    case RsvpConstants.RSVP_RECEIVED:
      setRsvp(payload.rsvp);
      RsvpStore.__emitChange();
      break;
    case RsvpConstants.RSVP_REMOVED:
      removeRsvp(payload.rsvp);
      RsvpStore.__emitChange();
      break;
  }
};

module.exports = RsvpStore;
