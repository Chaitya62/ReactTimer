import React, {Component} from 'react';
import Clock from './Clock.jsx';
class Timer extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1 className="text-center page-title">Timer</h1>
        <div>
          <Clock/>
        </div>
      </div>
    );
  }
}

export default Timer;
