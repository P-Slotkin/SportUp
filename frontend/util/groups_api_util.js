

const GroupApiUtil = {

  fetchGroups(success, filters) {
    $.ajax({
      url: `/api/groups`,
      type: `GET`,
      filters,
      success
    });
  },

  createGroup(data, success){
    $.ajax({
      url: `/api/groups`,
      type: `POST`,
      dataType: `json`,
      data: { data },
      success
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
      data: { group: { title: data.title, body: data.body } },
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
