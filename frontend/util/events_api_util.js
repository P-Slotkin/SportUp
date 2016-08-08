const EventApiUtil = {

  fetchEvents(success, filters) {
    $.ajax({
      url: `/api/events`,
      type: `GET`,
      filters,
      success
    });
  },

  createEvent(data, cb, redirectCb){
    $.ajax({
      url: `/api/events`,
      type: `POST`,
      dataType: `json`,
      data: { data },
      success: function(data) {
        cb(data, redirectCb);
      }
    });
  },

  getEvent(id, success) {
    $.ajax({
      url: `api/events/${id}`,
      success
    });
  },

  updateEvent (data, cb) {
    $.ajax({
      url: `api/events/${data.id}`,
      type: "PATCH",
      data: { event: { title: data.title, location: data.location, description: data.description } },
      success
    });
  },

  deleteEvent(id, success){
    $.ajax({
      url: `api/events/${id}`,
      type: "DELETE",
      success
    });
  }

};

module.exports = EventApiUtil;
