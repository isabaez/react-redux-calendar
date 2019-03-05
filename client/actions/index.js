/*
 * action types
 */

// These are just placeholders; replace with your code.

const ADD_EVENT = 'ADD_EVENT';

function addEvent(id, title, day, startTime, endTime, location) {
	return {
		type: ADD_EVENT,
		event: {
			id: id,
			title: title,
			day: day,
			startTime: startTime,
			endTime: endTime,
			location: location
		}
	}
}

module.exports = {
  ADD_EVENT: ADD_EVENT,
  addEvent: addEvent
};
