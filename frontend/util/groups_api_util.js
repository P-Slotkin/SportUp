

const GroupApiUtil = {

  fetchGroups(success, filters) {
    $.ajax({
      url: `/api/groups`,
      type: `GET`,
      filters,
      success
    });
  },

  createGroup(data, cb, redirectCb){
    $.ajax({
      url: `/api/groups`,
      type: `POST`,
      dataType: `json`,
      data: { data },
      success: function(data) {
        cb(data, redirectCb);
      }
    });
  },

  getGroup(id, success) {
    $.ajax({
      url: `api/groups/${id}`,
      success
    });
  },

  updateGroup (data, cb) {
    $.ajax({
      url: `api/groups/${data.id}`,
      type: "PATCH",
      data: { group: { title: data.title, location: data.location, description: data.description, category: data.category } },
      success
    });
  },

  deleteGroup(id, success){
    $.ajax({
      url: `api/groups/${id}`,
      type: "DELETE",
      success
    });
  }

};

module.exports = GroupApiUtil;
