const React = require('react');
const EventStore = require('../stores/event_store.js');
const EventActions = require('../actions/event_actions.js');
const GroupShowEventIndexItem = require('./group_show_event_index_item.jsx');
const GroupStore = require('../stores/group_store');
// const EventForm = require('./event_form.jsx');

module.exports = React.createClass({
  getInitialState () {
    return { events: this.props.events };
  },

  componentDidMount() {
    this.groupListener = GroupStore.addListener(this._groupChanged);
  },

  componentWillUnmount() {
    this.groupListener.remove();
  },

  _groupChanged() {
    this.setState({events: this.props.events});
  },

  render () {
    let that = this;
    return (
      <div className="group-show-event-index">
        <h2>Events</h2>
        <ul>
          {
            this.state.events.map(function (Event) {
              return (<GroupShowEventIndexItem population={that.props.population} key={Event.id} event={Event} />);
            })
          }
        </ul>


      </div>
    );
  }
});
