import React from 'react';
import './Countdown.css';

class Countdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shown: true,
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      interval: 0
    }
  }

  componentDidMount() {
    let interval = setInterval(() => this.countdown(), 1000);
    this.setState({interval: interval});
  }

  countdown = () => {
    let d, h, m, s;
    const currentTime = new Date();
    let currentTimeInMS = currentTime.getTime();
    let date = new Date(this.props.eventDate);
    let eventTimeInMS = date.getTime() + 5*60*60*1000;
    if (this.props.eventTime !== 0) {
      const a = this.props.eventTime.split(':');
      const h = a[0] * 60 * 60 * 1000;
      const m = a[1] * 60 * 1000;
      const t = h + m;
      eventTimeInMS += t;
    }
    let diff = eventTimeInMS - currentTimeInMS;
    const daysInMS = 24 * 60 * 60 * 1000;
    const hoursInMS = 60 * 60 * 1000;
    const minutesInMS = 60 * 1000;
    d = Math.floor(diff / daysInMS);
    h = Math.floor((diff - d*daysInMS)/hoursInMS);
    m = Math.floor((diff - d*daysInMS - h*hoursInMS)/minutesInMS);
    s = Math.floor((diff - d*daysInMS - h*hoursInMS - m*minutesInMS)/1000);
    this.setState({
      days: d,
      hours: h,
      minutes: m,
      seconds: s
    });
  }

  cancelCountdown = () => {
    clearInterval(this.state.interval);
    this.setState({
      shown: false,
      interval: 0}
      );
  }

  render() {
    return (
      <>
        {this.state.shown &&
          <div id="countdown-div" className="countdown-div">
            <h1 id="title" className="title">Countdown to: {this.props.eventTitle}</h1>
            <div className="timer">
              <div className="timer-container">
                <h1 id="days" className="timer-number">{this.state.days}</h1>
                <h2 id="days-label" className="timer-label">days</h2>
              </div>
              <div className="timer-container">
                <h1 id="hours" className="timer-number">{this.state.hours}</h1>
                <h2 id="hours-label" className="timer-label">hours</h2>
              </div>
              <div className="timer-container">
                <h1 id="minutes" className="timer-number">{this.state.minutes}</h1>
                <h2 id="minutes-label" className="timer-label">minutes</h2>
              </div>
              <div className="timer-container">
                <h1 id="seconds" className="timer-number">{this.state.seconds}</h1>
                <h2 id="seconds-label" className="timer-label">seconds</h2>
              </div>
            </div>
            <button 
              id="cancelButton" 
              className="cancelButton" 
              type="button" 
              onClick={this.cancelCountdown}>Cancel</button>
          </div> 
        }
      </>
    )
  }
}

export default Countdown;