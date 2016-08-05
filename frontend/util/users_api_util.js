const UserApiUtil = {

  fetchUsers(success, filters) {
    $.ajax({
      url: `/api/users`,
      type: `GET`,
      filters,
      success
    });
  },

  createUser(data, cb, redirectCb){
    $.ajax({
      url: `/api/users`,
      type: `POST`,
      dataType: `json`,
      data: { data },
      success: function(data) {
        cb(data, redirectCb);
      }
    });
  },

  getUser(id, success) {
    $.ajax({
      url: `api/users/${id}`,
      success
    });
  },

  updateUser (data, cb) {
    $.ajax({
      url: `api/users/${data.id}`,
      type: "PATCH",
      data: { user: { title: data.title, body: data.body } },
      success
    });
  },

  deleteUser(id, success){
    $.ajax({
      url: `api/users/${id}`,
      type: "DELETE",
      success
    });
  }

};

module.exports = UserApiUtil;
