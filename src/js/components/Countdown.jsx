import React, {Component} from 'react';
import Clock from './Clock.jsx';
import CountdownForm from './CountdownForm.jsx';
class Countdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      seconds: 0,
      countdownStatus: 'stopped'
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (this.state.countdownStatus !== prevState.countdownStatus) {
      switch (this.state.countdownStatus) {
        case 'started':
          this.startTimer();
          break;
      }
    }
  }
  startTimer() {
    this.timer = setInterval(() => {
      var newSeconds = this.state.seconds - 1;
      this.setState({
        seconds: (newSeconds >= 0
          ? newSeconds
          : 0)
      });
      if (newSeconds <= 0) {
        this.setState({countdownStatus: 'stopped'});
      }
    }, 1000);
  }
  render() {
    return (
      <div>
        <h1 className="text-center page-title">Countdown</h1>
        <Clock totalSeconds ={this.state.seconds}/>
        <CountdownForm onSetCountdown={this.handleSetCountdown.bind(this)}/>
      </div>
    );
  }
  handleSetCountdown(seconds) {
    this.setState({seconds: seconds, countdownStatus: 'started'});

  }
}

export default Countdown;
