import React from 'react';
import './App.css';
import EventForm from './EventForm';
import Countdown from './Countdown';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      eventForm1Shown: true,
      eventTitle1: 'Wow in the World Pop-Up Party',
      eventDate1: '2020-02-29',
      eventTime1: '13:00',
      countdown1: {
        shown: false,
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
      },
      eventForm2Shown: false,
      eventTitle2: 'Wow in the World Pop-Up Party',
      eventDate2: '2020-02-29',
      eventTime2: '13:00',
      countdown2: {
        shown: false,
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
      },
      eventForm3Shown: false,
      eventTitle3: 'Wow in the World Pop-Up Party',
      eventDate3: '2020-02-29',
      eventTime3: '13:00',
      countdown3: {
        shown: false,
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
      }
    }
    this.addAnother = this.addAnother.bind(this);
    this.countdown = this.countdown.bind(this);
    this.startCountdown = this.startCountdown.bind(this);
    this.cancelCountdown = this.cancelCountdown.bind(this);
  }
  
  updateEvent(e) {
    if (e.target.id === "eventTitle1") {
      this.setState({
      eventTitle1: e.target.value
    });
    } else if (e.target.id === "eventDate1") {
      this.setState({
      eventDate1: e.target.value
    });
    } else if (e.target.id === "eventTime1") {
      this.setState({
      eventTime1: e.target.value
    });
    } if (e.target.id === "eventTitle2") {
      this.setState({
      eventTitle2: e.target.value
    });
    } else if (e.target.id === "eventDate2") {
      this.setState({
      eventDate2: e.target.value
    });
    } else if (e.target.id === "eventTime2") {
      this.setState({
      eventTime2: e.target.value
    });
    } if (e.target.id === "eventTitle3") {
      this.setState({
      eventTitle3: e.target.value
    });
    } else if (e.target.id === "eventDate3") {
      this.setState({
      eventDate3: e.target.value
    });
    } else if (e.target.id === "eventTime3") {
      this.setState({
      eventTime3: e.target.value
    });
    }
  }

  countdown(date) {
    let eDate, eTime;
    if (date === "eventDate1") {
      eDate = this.state.eventDate1;
      eTime = this.state.eventTime1;
    }
    if (date === "eventDate2") {
      eDate = this.state.eventDate2;
      eTime = this.state.eventTime2;
    }
    if (date === "eventDate3") {
      eDate = this.state.eventDate3;
      eTime = this.state.eventTime3;
    }
    let d, h, m, s;
    const currentTime = new Date();
    let currentTimeInMS = currentTime.getTime();
    let eventDate = new Date(eDate);
    let eventTimeInMS = eventDate.getTime() + 5*60*60*1000;
    console.log(eventTimeInMS);
    if (eTime !== 0) {
      const a = eTime.split(':');
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
    if (date === "eventDate1") {
      this.setState(prevState => ({
        countdown1: {
          ...prevState.countdown1,
          shown: true,
          days: d,
          hours: h,
          minutes: m,
          seconds: s
        }
      }));
    }
    if (date === "eventDate2") {
      this.setState(prevState => ({
        countdown2: {
          ...prevState.countdown2,
          shown: true,
          days: d,
          hours: h,
          minutes: m,
          seconds: s
        }
      }));
    }
    if (date === "eventDate3") {
      this.setState(prevState => ({
        countdown3: {
          ...prevState.countdown3,
          shown: true,
          days: d,
          hours: h,
          minutes: m,
          seconds: s
        }
      }));
    }
  }
  
  startCountdown(e) {
    if (e.target.id === "startButton1") {
      this.interval1 = setInterval(this.countdown, 1000, "eventDate1");
      this.setState({
        eventForm1Shown: false
      })
    }
    if (e.target.id === "startButton2") {
      this.interval2 = setInterval(this.countdown, 1000, "eventDate2");
      this.setState({
        eventForm2Shown: false
      })
    }
    if (e.target.id === "startButton3") {
      this.interval3 = setInterval(this.countdown, 1000, "eventDate3");
      this.setState({
        eventForm3Shown: false
      })
    }
  }

  cancelCountdown(e) {
    if (e.target.id === "cancelButton1") {
      clearInterval(this.interval1);
      this.setState(prevState => ({
      countdown1: {
        ...prevState.countdown1,
        shown: false,
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
      }
    }))
    } 
    if (e.target.id === "cancelButton2") {
      clearInterval(this.interval2);
      this.setState(prevState => ({
      countdown2: {
        ...prevState.countdown2,
        shown: false,
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
      }
    }))
    }
    if (e.target.id === "cancelButton3") {
      clearInterval(this.interval3);
      this.setState(prevState => ({
      countdown3: {
        ...prevState.countdown3,
        shown: false,
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
      }
    }))
    }  
  } 
  
  addAnother() {
    if (this.state.countdown1.shown && this.state.countdown2.shown && this.state.countdown3.shown) {
      alert("That's enough counting down for today!");
    } else if (this.state.countdown1.shown && this.state.countdown2.shown && !this.state.countdown3.shown) {
      this.setState({
        eventForm3Shown: true
      });
    } else if (this.state.countdown1.shown && !this.state.countdown2.shown && !this.state.countdown3.shown) {
      this.setState({
        eventForm2Shown: true
      });
    } else {
      this.setState({
        eventForm1Shown: true
      });
    }
  }

  render() {
    console.log(this.state.countdown1);
    return (
      <>
        {
          (!this.state.eventForm1Shown && !this.state.eventForm2Shown && !this.state.eventForm3Shown && !this.state.countdown3.shown) ? 
          <div className="addAnother">
            <button 
            id="addButton" 
            className="addButton"
            type="button" 
            onClick={this.addAnother}>Add Another Event</button>
          </div> 
        : null }
        {
          this.state.eventForm1Shown ? 
          <EventForm
            eventTitle={"eventTitle1"}
            eventDate={"eventDate1"}
            eventTime={"eventTime1"}
            titleChange={this.updateEvent.bind(this)}
            dateChange={this.updateEvent.bind(this)}
            timeChange={this.updateEvent.bind(this)}
            startButton={"startButton1"}
            startCountdown={this.startCountdown.bind(this)}
          />
        : null }
         {
          this.state.eventForm2Shown ? 
          <EventForm
            eventTitle={"eventTitle2"}
            eventDate={"eventDate2"}
            eventTime={"eventTime2"}
            titleChange={this.updateEvent.bind(this)}
            dateChange={this.updateEvent.bind(this)}
            timeChange={this.updateEvent.bind(this)}
            startButton={"startButton2"}
            startCountdown={this.startCountdown.bind(this)}
          />
        : null }
         {
          this.state.eventForm3Shown ? 
          <EventForm
            eventTitle={"eventTitle3"}
            eventDate={"eventDate3"}
            eventTime={"eventTime3"}
            titleChange={this.updateEvent.bind(this)}
            dateChange={this.updateEvent.bind(this)}
            timeChange={this.updateEvent.bind(this)}
            startButton={"startButton3"}
            startCountdown={this.startCountdown.bind(this)}
          />
        : null }
        { 
          this.state.countdown1.shown ? 
          <Countdown 
            eventTitle={this.state.eventTitle1}
            days={this.state.countdown1.days}
            hours={this.state.countdown1.hours}
            minutes={this.state.countdown1.minutes}
            seconds={this.state.countdown1.seconds}
            cancelButton={"cancelButton1"}
            cancelCountdown={this.cancelCountdown}
          />
        : null }
        { 
          this.state.countdown2.shown ? 
          <Countdown 
            eventTitle={this.state.eventTitle2}
            days={this.state.countdown2.days}
            hours={this.state.countdown2.hours}
            minutes={this.state.countdown2.minutes}
            seconds={this.state.countdown2.seconds}
            cancelButton={"cancelButton2"}
            cancelCountdown={this.cancelCountdown}
          />
        : null }
        { 
          this.state.countdown3.shown ? 
          <Countdown 
            eventTitle={this.state.eventTitle3}
            days={this.state.countdown3.days}
            hours={this.state.countdown3.hours}
            minutes={this.state.countdown3.minutes}
            seconds={this.state.countdown3.seconds}
            cancelButton={"cancelButton3"}
            cancelCountdown={this.cancelCountdown}
          />
        : null }
      </>
    );
  }
}

export default App;
