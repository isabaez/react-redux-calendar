// Entry point for your React app.

var React = require('react');
var Actions = require('../actions/index')
var EditPanel = require('./editpanel')
var Calendar = require('./calendar')

const App = React.createClass({
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <Calendar store={this.props.store}/>
        <EditPanel store={this.props.store}/>
      </div>
    );
  }
});

module.exports = App;
