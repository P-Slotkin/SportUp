const React = require('react');
const EventStore = require('../stores/event_store.js');
const EventActions = require('../actions/event_actions.js');
const GroupShowEventIndexItem = require('./group_show_event_index_item.jsx');
// const EventForm = require('./event_form.jsx');

module.exports = React.createClass({
  getInitialState () {
    return { events: this.props.events };
  },

  render () {
    return (
      <div className="group-show-event-index">
        <ul>
          {
            this.state.events.map(function (Event) {
              return (<GroupShowEventIndexItem key={Event.id} event={Event} />);
            })
          }
        </ul>


      </div>
    );
  }
});