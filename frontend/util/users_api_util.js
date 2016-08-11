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
    console.log( data);
    $.ajax({
      url: `api/users/${data.id}`,
      type: "PATCH",
      contentType: false,
      processData: false,
      data: data,
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
