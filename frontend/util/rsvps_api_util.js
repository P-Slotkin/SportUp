const RsvpApiUtil = {

  fetchRsvps(success, filters) {
    $.ajax({
      url: `/api/rsvps`,
      type: `GET`,
      filters,
      success
    });
  },

  createRsvp(data, cb, redirectCb){
    $.ajax({
      url: `/api/rsvps`,
      type: `POST`,
      dataType: `json`,
      data: { data },
      success: function(data) {
        cb(data, redirectCb);
      }
    });
  },

  deleteRsvp(id, success){
    $.ajax({
      url: `api/rsvps/${id}`,
      type: "DELETE",
      success
    });
  }

};

module.exports = RsvpApiUtil;
