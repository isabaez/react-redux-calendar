var React = require('react');
var Actions = require('../actions/index')

const Event = React.createClass({
  render() {
    return (
      <div className='container'>
        <p>Event</p>
        {this.props.title} <br>
        {this.props.startTime} <br>
        {this.props.endTime}
      </div>
    );
  }
});

module.exports = Event;