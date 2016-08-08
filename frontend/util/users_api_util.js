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

  updateUser (data, success) {
    $.ajax({
      url: `api/users/${data.id}`,
      type: "PATCH",
      data: { user: {id: data.id, name: data.name, email: data.email, location: data.location, interests: data.interests } },
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
