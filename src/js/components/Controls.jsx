import React, {Component} from 'react';

class Controls extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    var {countdownStatus} = this.props;
    var self = this;
    var renderStartStopButton = () => {
      if (countdownStatus === 'started') {
        return <button className="button secondary">Pause</button>
      } else if (countdownStatus === 'paused') {
        return <button className="button primary">Start</button>
      }
    };
    return (
      <div class="controls">
        {renderStartStopButton()}
        <button className="button alert hollow">
          Clear
        </button>
      </div>
    );
  }
}

Controls.propTypes = {
  countdownStatus: React.PropTypes.string
};

export default Controls;
