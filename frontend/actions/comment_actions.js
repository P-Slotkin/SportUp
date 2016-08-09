const ApiUtil = require('../util/comments_api_util.js');
const AppDispatcher = require('../dispatcher/dispatcher.js');
const CommentConstants = require('../constants/comment_constants.js');

module.exports = {
  fetchComments () {
    ApiUtil.fetchComments(this.receiveAll);
  },

  createComment (data, cb) {
    ApiUtil.createComment(data, this.receiveComment, cb);
  },

  deleteComment (id) {
    ApiUtil.deleteComment(id, this.removeComment);
  },

  receiveAll (comments) {
    AppDispatcher.dispatch({
      actionType: CommentConstants.COMMENTS_RECEIVED,
      comments: comments
    });
  },

  receiveComment (comment, redirectCb) {
    AppDispatcher.dispatch({
      actionType: CommentConstants.COMMENT_RECEIVED,
      comment: comment
    });

    if (typeof redirectCb === 'function') {
      redirectCb(comment);
    }
  },

  removeComment (comment) {
    AppDispatcher.dispatch({
      actionType: CommentConstants.COMMENT_REMOVED,
      comment: comment
    });
  }
};
