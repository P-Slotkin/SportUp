const Store = require('flux/utils').Store;
const CommentConstants = require('../constants/comment_constants.js');
const AppDispatcher = require('../dispatcher/dispatcher.js');

const CommentStore = new Store(AppDispatcher);

let _comments = {};

const resetComments = function (comments) {
  _comments = {};
  let commentsArr = [];
  for (var key in comments) {
    commentsArr.push(comments[key]);
  }

  commentsArr.forEach(function (comment) {
    _comments[comment.id] = comment;
  });
};

const setComment = function (comment) {
  _comments[comment.id] = comment;
};

const removeComment = function (comment) {
  delete _comments[comment.id];
};

CommentStore.all = function () {
  return Object.keys(_comments).map(function (commentId) {
    return _comments[commentId];
  });
};

CommentStore.find = function (id) {
  return _comments[id];
};


CommentStore.__onDispatch = function (payload) {
  switch (payload.actionType) {
    case CommentConstants.COMMENTS_RECEIVED:
      resetComments(payload.comments);
      CommentStore.__emitChange();
      break;
    case CommentConstants.COMMENT_RECEIVED:
      setComment(payload.comment);
      CommentStore.__emitChange();
      break;
    case CommentConstants.COMMENT_REMOVED:
      removeComment(payload.comment);
      CommentStore.__emitChange();
      break;
  }
};

module.exports = CommentStore;
