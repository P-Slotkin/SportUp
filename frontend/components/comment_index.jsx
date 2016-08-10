const React = require('react');
const CommentIndexItem = require('./comment_index_item');
const CommentStore = require('../stores/comment_store');
const CommentActions = require('../actions/comment_actions');
const EventStore = require('../stores/event_store');
const EventActions = require('../actions/event_actions');
const CommentForm = require('./comment_form');

const CommentIndex = React.createClass({

  getInitialState () {
    return { comments: this.props.comments };
  },

  componentDidMount() {
    CommentActions.fetchComments();
    EventActions.fetchEvents();
    this.eventListener = EventStore.addListener(this._eventChanged);
  },

  componentWillUnmount() {
    this.eventListener.remove();
  },

  _eventChanged() {
    this.setState({comments: this.props.comments});
  },

  render () {
    let that = this;
    if (this.state.comments) {
      return (
        <div className="event-show-comment-index">
          <h2>Comments</h2>
          <ul>
            {
              this.state.comments.map(function (Comment) {
                return (<CommentIndexItem event={that.props.event} key={Comment.id} comment={Comment} />);
              })
            }
          </ul>

          <CommentForm event={that.props.event} />
        </div>);
      } else {
      return (<div />);
    }
  }

});

module.exports = CommentIndex;