var Actions = require('../actions');

// This is just a placeholder; replace with your code.
const STATE = {
	'title': "Redux Calendar",
	'Monday': [],
	'Tuesday': [],
	'Wednesday': [],
	'Thursday': [],
	'Friday': []
};

// Note: You may have more than one reducer! If you do, combine them into
// a single reducer using Redux.combineReducers. See
// http://redux.js.org/docs/api/combineReducers.html and
// http://redux.js.org/docs/basics/Reducers.html for more info.

const reducer = function(state, action) {
  if (typeof state === "undefined")
    return STATE;
  switch (action.type) {
  	case "ADD_EVENT":
  		var update = {};
  		update[action.event.day] = state[action.event.day].concat({
  			id: action.event.id,
  			title: action.event.title,
  			day: action.event.day,
  			startTime: action.event.startTime,
  			endTime: action.event.endTime,
  			location: action.event.location
  		});
  		return Object.assign({}, state, update);
    default:
    	return state;
  }
};

module.exports = reducer;
