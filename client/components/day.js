var React = require('react');
var Actions = require('../actions/index')

const Day = React.createClass({
  render() {
  	var toReturn = "";
  	var events = this.props.store.getState()[this.props.day]
  	for (var i = 0; i < events.length; i++) {
  		toReturn.concat(<Event title={events[i].title} startTime={events[i].startTime} endTime={events[i].endTime} />)
  	}
  	console.log(this.props.store.getState()[this.props.day])
    return (
      <div id="cal-day">
        <p>{this.props.day}</p>
        {toReturn}
      </div>
    );
  }
});

module.exports = Day;