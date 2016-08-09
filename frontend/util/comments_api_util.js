const CommentApiUtil = {

  fetchComments(success, filters) {
    $.ajax({
      url: `/api/comments`,
      type: `GET`,
      filters,
      success
    });
  },

  createComment(data, cb, redirectCb){
    $.ajax({
      url: `/api/comments`,
      type: `POST`,
      dataType: `json`,
      data: { data },
      success: function(data) {
        cb(data, redirectCb);
      }
    });
  },

  updateComment (data, cb) {
    $.ajax({
      url: `api/comments/${data.id}`,
      type: "PATCH",
      data: { data: { title: data.title, location: data.location, description: data.description } },
      cb
    });
  },

  deleteComment(id, success){
    $.ajax({
      url: `api/comments/${id}`,
      type: "DELETE",
      success
    });
  }

};

module.exports = CommentApiUtil;
