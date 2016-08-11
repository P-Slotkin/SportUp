

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
      data:  {group: data},
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
    console.log( data);
    $.ajax({
      url: `api/groups/${data.id}`,
      type: "PATCH",
      contentType: false,
      processData: false,
      data: data,
      cb
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
