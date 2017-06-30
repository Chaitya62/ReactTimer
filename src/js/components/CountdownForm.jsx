import React, {Component} from 'react';

class CountdownForm extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <form ref='form' onSubmit={this.onSubmit.bind(this)} className="countdown-form">
          <input type="text" ref="seconds" placeholder="Enter time in seconds"/>
          <input className="button expanded" type="submit" value="Start"/>
        </form>
      </div>
    );
  }
  onSubmit(e) {
    e.preventDefault();
    var strSeconds = this.refs.seconds.value;
    console.log('input count', $('input').length);
    if (/^[0-9]*$/.test(strSeconds)) {
      this.refs.seconds.value = '';
      this.props.onSetCountdown(parseInt(strSeconds, 10));
    }
  }
}

export default CountdownForm;
