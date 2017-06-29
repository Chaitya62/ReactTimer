import React, {Component} from 'react';
import Clock from './Clock.jsx';
class Countdown extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1 className="text-center page-title">Countdown</h1>
        <Clock totalSeconds ={129}/>
      </div>
    );
  }
}

export default Countdown;
