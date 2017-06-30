import React, {Component} from 'react';
import Clock from './Clock.jsx';
import CountdownForm from './CountdownForm.jsx';
import Controls from './Controls';
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
        case 'stopped':
          this.setState({seconds: 0});
        case 'paused':
          clearInterval(this.timer);
          this.timer = undefined;
          break;
      }
    }
  }
  handleStatusChange(newStatus) {
    console.log(newStatus);
    this.setState({countdownStatus: newStatus});
  }
  componentWillUnmount() {
    clearInterval(this.timer);
    this.timer = undefined;
  }
  startTimer() {
    this.timer = setInterval(() => {
      var newSeconds = this.state.seconds - 1;
      this.setState({
        seconds: (newSeconds >= 0
          ? newSeconds
          : 0)
      });
      if (newSeconds == 0) {
        this.setState({countdownStatus: 'stopped'})
      }
    }, 1000);
  }
  render() {
    var {countdownStatus} = this.state;
    var self = this;
    var renderControlArea = () => {
      if (countdownStatus === 'stopped') {
        return <CountdownForm onSetCountdown={self.handleSetCountdown.bind(self)}/>

      } else {
        return <Controls onStatusChange={self.handleStatusChange.bind(self)} countdownStatus={countdownStatus}/>
      }
    }
    return (
      <div>
        <h1 className="text-center page-title">Countdown</h1>
        <Clock totalSeconds ={this.state.seconds}/> {renderControlArea()}
      </div>
    );
  }

  handleSetCountdown(seconds) {
    this.setState({seconds: seconds, countdownStatus: 'started'});

  }
}

export default Countdown;
