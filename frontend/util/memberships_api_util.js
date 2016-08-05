const MembershipApiUtil = {

  fetchMemberships(success, filters) {
    $.ajax({
      url: `/api/memberships`,
      type: `GET`,
      filters,
      success
    });
  },

  createMembership(data, cb, redirectCb){
    $.ajax({
      url: `/api/memberships`,
      type: `POST`,
      dataType: `json`,
      data: { data },
      success: function(data) {
        cb(data, redirectCb);
      }
    });
  },

  deleteMembership(id, success){
    $.ajax({
      url: `api/memberships/${id}`,
      type: "DELETE",
      success
    });
  }

};

module.exports = MembershipApiUtil;
