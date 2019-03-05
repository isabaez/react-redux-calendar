var React = require('react');
var Actions = require('../actions/index')
var Day = require('./day')

const Calendar = React.createClass({
  render() {
    return (
      <div id="cal">
        <Day day={(function() { return "Monday" })()} store={this.props.store}/>
        <Day day={(function() { return "Tuesday" })()} store={this.props.store}/>
        <Day day={(function() { return "Wednesday" })()} store={this.props.store}/>
        <Day day={(function() { return "Thursday" })()} store={this.props.store}/>
        <Day day={(function() { return "Friday" })()} store={this.props.store}/>
      </div>
    );
  }
})

module.exports = Calendar;