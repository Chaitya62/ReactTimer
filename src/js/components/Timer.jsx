import React, {Component} from 'react';
import Clock from './Clock.jsx';
import Controls from './Controls.jsx';
class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      seconds: 0,
      timerStatus: 'stopped'
    };
  }
  componentDidUpdate(prevProps, prevState) {
    if (this.state.timerStatus !== prevState.timerStatus) {
      switch (this.state.timerStatus) {
        case 'started':
          this.startTimer();
          break;
        case 'stopped':
          this.setState({seconds: 0});
        case 'paused':
          clearInterval(this.timer);
          this.timer = undefined;
          break;
      }
    }
  }
  startTimer() {
    this.timer = setInterval(() => {
      var newSeconds = this.state.seconds + 1;
      this.setState({seconds: newSeconds});
    }, 1000);
  }
  componentWillUnmount() {
    clearInterval(this.timer);
    this.timer = undefined;

  }

  render() {
    var {timerStatus} = this.state;
    return (
      <div>
        <h1 className="text-center page-title">Timer</h1>
        <div>
          <Clock totalSeconds={this.state.seconds}/>
        </div>
        <Controls status={this.state.timerStatus} onStatusChange={this.handleStatusChange.bind(this)}/>
      </div>
    );
  }
  handleStatusChange(newStatus) {
    this.setState({timerStatus: newStatus});
  }
}

export default Timer;
