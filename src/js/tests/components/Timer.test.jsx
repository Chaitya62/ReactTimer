import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
import ReactTestUtils from 'react-dom/test-utils'
import $ from 'jquery/dist/jquery.min.js';

import Timer from 'Components/Timer';

describe('Timer', () => {
  it('should exits', () => {
    expect(Timer).toExist();
  });

  describe('handleStatusChange', () => {
    var timer = ReactTestUtils.renderIntoDocument(<Timer/>);
    it('should countup when started', (done) => {

      timer.handleStatusChange('started');
      expect(timer.state.seconds).toBe(0);
      var timeout = setTimeout(() => {
        expect(timer.state.seconds).toBe(2);
        expect(timer.state.timerStatus).toBe('started');
        done();
      }, 2001);
    });

    it('should pause count when paused', (done) => {
      timer.handleStatusChange('paused');
      var timeout = setTimeout(() => {
        expect(timer.state.seconds).toBe(2);
        expect(timer.state.timerStatus).toBe('paused');
        done();
      }, 1001);
    });

    it('should clear timer on stopped status', (done) => {
      timer.handleStatusChange('stopped');
      var timeout = setTimeout(() => {
        expect(timer.state.seconds).toBe(0);
        expect(timer.state.timerStatus).toBe('stopped');
        done();
      }, 1001)
    })

  });

});
