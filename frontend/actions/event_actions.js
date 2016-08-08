const ApiUtil = require('../util/events_api_util.js');
const AppDispatcher = require('../dispatcher/dispatcher.js');
const EventConstants = require('../constants/event_constants.js');

module.exports = {
  fetchEvents () {
    ApiUtil.fetchEvents(this.receiveAll);
  },

  getEvent (id) {
    ApiUtil.getEvent(id, this.receiveEvent);
  },

  createEvent (data, cb) {
    ApiUtil.createEvent(data, this.receiveEvent, cb);
  },

  editEvent (data) {
    ApiUtil.updateEvent(data, this.receiveEvent);
  },

  deleteEvent (id) {
    ApiUtil.deleteEvent(id, this.removeEvent);
  },

  receiveAll (events) {
    AppDispatcher.dispatch({
      actionType: EventConstants.EVENTS_RECEIVED,
      events: events
    });
  },

  receiveEvent (event, redirectCb) {
    AppDispatcher.dispatch({
      actionType: EventConstants.EVENT_RECEIVED,
      event: event
    });

    if (typeof redirectCb === 'function') {
      redirectCb(event);
    }
  },

  removeEvent (event) {
    AppDispatcher.dispatch({
      actionType: EventConstants.EVENT_REMOVED,
      event: event
    });
  }
};
