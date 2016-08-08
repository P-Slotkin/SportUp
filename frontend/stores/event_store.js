const Store = require('flux/utils').Store;
const EventConstants = require('../constants/event_constants.js');
const AppDispatcher = require('../dispatcher/dispatcher.js');

const EventStore = new Store(AppDispatcher);

let _events = {};

const resetEvents = function (events) {
  _events = {};
  let eventsArr = [];
  for (var key in events) {
    eventsArr.push(events[key]);
  }

  eventsArr.forEach(function (event) {
    _events[event.id] = event;
  });
};

const setEvent = function (event) {
  _events[event.id] = event;
};

const removeEvent = function (event) {
  delete _events[event.id];
};

EventStore.all = function () {
  return Object.keys(_events).map(function (eventId) {
    return _events[eventId];
  });
};

EventStore.find = function (id) {
  return _events[id];
};


EventStore.__onDispatch = function (payload) {
  switch (payload.actionType) {
    case EventConstants.EVENTS_RECEIVED:
      resetEvents(payload.events);
      EventStore.__emitChange();
      break;
    case EventConstants.EVENT_RECEIVED:
      setEvent(payload.event);
      EventStore.__emitChange();
      break;
    case EventConstants.EVENT_REMOVED:
      removeEvent(payload.event);
      EventStore.__emitChange();
      break;
  }
};

module.exports = EventStore;
