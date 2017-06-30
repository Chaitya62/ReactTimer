import React, {Component} from 'react';

class Controls extends Component {
  constructor(props) {
    super(props);
  }

  onStatusChange(newStatus) {
    return () => {
      this.props.onStatusChange(newStatus);
    }
  }
  render() {
    var {status} = this.props;
    var self = this;
    var renderStartStopButton = () => {
      if (status === 'started') {
        return <button className="button secondary" onClick={self.onStatusChange('paused')}>Pause</button>
      } else {
        return <button className="button primary" onClick={self.onStatusChange('started')}>Start</button>
      }
    };
    return (
      <div className="controls">
        {renderStartStopButton()}
        <button onClick={self.onStatusChange('stopped')} className="button alert hollow">
          Clear
        </button>
      </div>
    );
  }
}

Controls.propTypes = {
  status: React.PropTypes.string.isRequired,
  onStatusChange: React.PropTypes.func.isRequired
};

export default Controls;
