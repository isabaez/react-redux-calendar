// Note: You probably do not need to modify this file. Take a look at
// components/app.js.

var React = require('react');
var ReactDOM = require('react-dom')
var Provider = require('react-redux').Provider;

var Actions = require('./actions');
var App = require('./components/app');
var reducer = require('./reducers');

var store = require('redux').createStore(reducer);

function render() {
  ReactDOM.render(
    <Provider store={store}>
      <App store={store} title={store.getState().title}/>
    </Provider>,
      document.getElementById('root')
  );
}

render();

// Note: subscribing and rerendering here, at the top level, is using a
// large hammer for a small nail. It's simple and it works, but it's
// inefficient. It's better if each component listens just for changes
// that affect it, individually. react-redux does this for us if we use
// its connect function. See
// http://redux.js.org/docs/basics/UsageWithReact.html and
// https://github.com/reactjs/react-redux for more info.
store.subscribe(render);
