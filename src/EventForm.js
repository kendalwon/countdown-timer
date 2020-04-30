import React from 'react';
import './EventForm.css';
import Countdown from './Countdown';

class EventForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      eventFormShown: true,
      events: []
    }
  }
  
  newEvent = (e) => {
    e.preventDefault();
    let title = e.target.eventTitle.value;
    let date = e.target.eventDate.value;
    let time = e.target.eventTime.value;
    let event = {
      eventTitle: title,
      eventDate: date,
      eventTime: time,
      countdown: {
        shown: false,
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
      }
    }
    this.setState({
      eventFormShown: false,
      events: [...this.state.events, event]
    });
  }
  
  addAnotherEvent = () => {
    this.setState({
      eventFormShown: true
    });
  }

  render() {
    return (
      <>
        {
          (!this.state.eventFormShown) ? 
          <div className="addAnother">
            <button 
            id="addButton" 
            className="addButton"
            type="button" 
            onClick={this.addAnotherEvent}>Add Another Event</button>
          </div> 
        : 
        <form className="form" onSubmit={this.newEvent.bind(this)}>
          <input 
            id="eventTitle"
            name="eventTitle"
            className="eventTitle" 
            type="text" 
            placeholder="enter your event name"
          />
          <input 
            id="eventDate" 
            name="eventDate" 
            className="eventDate"
            type="date" 
            defaultValue="2020-02-29"
          />
          <input 
            id="eventTime"
            name="eventTime"           className="eventTime" 
            type="time"
            defaultValue="13:00"
          />
          <button           
            id="startButton"
            className="startButton" 
            type="submit">
              Start
          </button>
        </form>
        }
        {
          (this.state.events.length > 0) ?
          this.state.events.map(event => {
            return (
            <div key={event.eventTitle}>
              <Countdown 
                eventTitle={event.eventTitle}
                eventDate={event.eventDate}
                eventTime={event.eventTime}
              />
            </div>
          )}) : null
        }
      </>
    );
  }
}

export default EventForm;
