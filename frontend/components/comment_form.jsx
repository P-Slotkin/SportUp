const React = require('react');
const SessionStore = require('../stores/session_store');
const CommentActions = require('../actions/comment_actions');
const EventActions = require('../actions/event_actions');


const CommentForm = React.createClass({

  getInitialState() {
    return ({ body: "", author_id: SessionStore.currentUser().id, event_id: this.props.eventId });
  },

  bodyChange(e) {
    const newBody = e.target.value;
    this.setState({ body: newBody.slice(0, 100) });
  },

  handleSubmit(e) {
    e.preventDefault();
    const commentData = this.state;
    CommentActions.createComment( commentData );
    EventActions.getEvent(this.props.eventId);
    this.setState({ body: "" });
  },

  render: function() {
    let bodyLength = `You have ${this.state.body.length}/100 characters`;
    if (SessionStore.isUserLoggedIn()) {
      return (
        <div className="comment-form-container">
          <h5> Add Comment </h5>
          <div className="new-comment-form-container">
            <form onSubmit={this.handleSubmit}>
              <input type="text" value={this.state.body}
                onChange={this.bodyChange}
                className="login-input taller"
                placeholder="Your Comment"/>
              <br />
              <p className="comment-form-char-counter"> {bodyLength} </p>
              <input className="login-button comment-button" type="submit" value="Add Comment"/>
            </form>
          </div>
        </div>);
    } else {
      return (
        <div />
      );
    }
  }

});

module.exports = CommentForm;
