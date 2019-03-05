var React = require('react');
var Actions = require('../actions/index')

const EditPanel = React.createClass({
  getInitialState() {
    return {
      title: "",
      day: "",
      startTime: "",
      endTime: "",
      location: ""
    }
  },
  addEvent() {
    var action = Actions.addEvent(
      0, 
      this.state.title, 
      this.state.day, 
      this.state.startTime,
      this.state.endTime,
      this.state.location
    );
    this.props.store.dispatch(action)
  },
  updateTitle(e) {
    this.setState({
      title: e.target.value
    })
  },
  updateDay(e) {
    this.setState({
      day: e.target.value
    })
  },
  updateStartTime(e) {
    this.setState({
      startTime: e.target.value
    })
  },
  updateEndTime(e) {
    this.setState({
      endTime: e.target.value
    })
  },
  updateLocation(e) {
    this.setState({
      location: e.target.value
    })
  },
  render() {
    return (
      <div id='edit'>
        <div>
          <p>Edit Panel</p>
          <form>
            <label>Event title</label>
            <input type="text" className="form-control" id="title" placeholder="Event title" onChange={this.updateTitle}/>
            <label>Day</label>
            <select className="form-control" id="day" onChange={this.updateDay}>
              <option value="null">Select a day</option>
              <option>Monday</option>
              <option>Tuesday</option>
              <option>Wednesday</option>
              <option>Thursday</option>
              <option>Friday</option>
            </select>
            <label>Start time</label>
            <select className="form-control" id="startTime" onChange={this.updateStartTime}>
              <option value="null">Select a time</option>
              <option>12am</option>
              <option>1am</option>
              <option>2am</option>
              <option>3am</option>
              <option>4am</option>
              <option>5am</option>
              <option>6am</option>
              <option>7am</option>
              <option>8am</option>
              <option>9am</option>
              <option>10am</option>
              <option>11am</option>
              <option>12pm</option>
              <option>1pm</option>
              <option>2pm</option>
              <option>3pm</option>
              <option>4pm</option>
              <option>5pm</option>
              <option>6pm</option>
              <option>7pm</option>
              <option>8pm</option>
              <option>9pm</option>
              <option>10pm</option>
              <option>11pm</option>
              <option>12pm</option>
            </select>
            <label>End time</label>
            <select className="form-control" id="endTime" onChange={this.updateEndTime}>
              <option value="null">Select a time</option>
              <option>12am</option>
              <option>1am</option>
              <option>2am</option>
              <option>3am</option>
              <option>4am</option>
              <option>5am</option>
              <option>6am</option>
              <option>7am</option>
              <option>8am</option>
              <option>9am</option>
              <option>10am</option>
              <option>11am</option>
              <option>12pm</option>
              <option>1pm</option>
              <option>2pm</option>
              <option>3pm</option>
              <option>4pm</option>
              <option>5pm</option>
              <option>6pm</option>
              <option>7pm</option>
              <option>8pm</option>
              <option>9pm</option>
              <option>10pm</option>
              <option>11pm</option>
              <option>12pm</option>
            </select>
            <label>Location</label>
            <input type="text" className="form-control" id='location' placeholder="Location" onChange={this.updateLocation}/>
            <button type="submit" className='btn btn-default' onClick={this.addEvent}>Create Event</button>
          </form>
        </div>
      </div>
    );
  }
});

module.exports = EditPanel;