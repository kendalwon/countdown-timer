import React from 'react';
import './Countdown.css';

const Countdown = props => {
  return (
    <div id="countdown-div" className="countdown-div">
      <h1 id="title" className="title">Countdown to: {props.eventTitle}</h1>
      <div className="timer">
        <div className="timer-container">
          <h1 id="days" className="timer-number">{props.days}</h1>
          <h2 id="days-label" className="timer-label">days</h2>
        </div>
        <div className="timer-container">
          <h1 id="hours" className="timer-number">{props.hours}</h1>
          <h2 id="hours-label" className="timer-label">hours</h2>
        </div>
        <div className="timer-container">
          <h1 id="minutes" className="timer-number">{props.minutes}</h1>
          <h2 id="minutes-label" className="timer-label">minutes</h2>
        </div>
        <div className="timer-container">
          <h1 id="seconds" className="timer-number">{props.seconds}</h1>
          <h2 id="seconds-label" className="timer-label">seconds</h2>
        </div>
      </div>
      <button 
        id={props.cancelButton} 
        className="cancelButton" 
        type="button" 
        onClick={props.cancelCountdown}>Cancel</button>
    </div>
  )
}

export default Countdown;