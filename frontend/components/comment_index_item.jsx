const React = require('react');
const CommentActions = require('../actions/comment_actions');
const EventStore = require('../stores/event_store');
const EventActions = require('../actions/event_actions')
const SessionStore = require('../stores/session_store');
const hashHistory = require('react-router').hashHistory;

const CommentIndexItem = React.createClass({

  getInitialState(){
    return ({comment: this.props.comment, destroyed: false});
  },

  componentDidMount() {
    CommentActions.fetchComments();
    this.eventListener = EventStore.addListener(this._eventChanged);
  },

  componentWillUnmount() {
    this.eventListener.remove();
  },

  _eventChanged() {
    this.setState({comment: this.props.comment});
  },

  goToUser(id, e) {
    e.preventDefault();
    hashHistory.push(`/users/${id}`);
  },

  makeDestroyButton() {
    if (this.state.comment.author_id === SessionStore.currentUser().id) {
      return (<div className="login-signup-buttons">
        <button onClick={this._destroy} className="login-button">Delete
        </button>
      </div>);
    }
  },

  _destroy(e){
    e.preventDefault();
    CommentActions.deleteComment(this.props.comment.id);
    EventActions.getEvent(this.props.event.id);
    this.setState({destroyed: true});
  },

  render: function() {
    if (this.state.destroyed) {
      return (<div className="comment-index-item-container"> <h5 className="deleted"> Deleted </h5> </div>);
    } else {
      return (
        <div className="comment-index-item-container group" key="comment-index-item-container group">
          <div className="comment-index-item-left" key="comment-index-item-left">
            <img onClick={this.goToUser.bind(this, this.state.comment.author_id)} src={this.state.comment.creator.image_url} />
            <h4 onClick={this.goToUser.bind(this, this.state.comment.author_id)} > {this.state.comment.creator.name} </h4>
          </div>
          <div className="comment-index-item-right" key="comment-index-item-right">
            <p> {this.state.comment.body} </p>
            {this.makeDestroyButton()}
          </div>
        </div>

      );
    }
  }

});

module.exports = CommentIndexItem;
