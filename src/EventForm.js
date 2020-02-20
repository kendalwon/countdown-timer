import React from 'react';
import './EventForm.css';

const EventForm = props => {
  return (
    <form className="form">
          <input 
            id={props.eventTitle} 
            className="eventTitle" 
            type="text" 
            placeholder="enter your event name"
            onChange={props.titleChange} 
          />
          <input 
            id={props.eventDate}  
            className="eventDate"
            type="date" 
            defaultValue="2020-02-29"
            onChange={props.dateChange}
          />
          <input 
            id={props.eventTime} 
            className="eventTime" 
            type="time"
            defaultValue="13:00"
            onChange={props.timeChange}
          />
          <button 
            id={props.startButton} 
            className="startButton" 
            type="button" 
            onClick={props.startCountdown}>Start</button>
        </form>
  )
}

export default EventForm;