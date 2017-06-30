import React, {Component} from 'react';
import Clock from './Clock.jsx';
import CountdownForm from './CountdownForm.jsx';
class Countdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      seconds: 0
    }
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
    this.setState({seconds});
  }
}

export default Countdown;
