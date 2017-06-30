import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
import ReactTestUtils from 'react-dom/test-utils'
import $ from 'jquery/dist/jquery.min.js';

import Countdown from 'Components/Countdown';

describe('Countdown', () => {
  it('should exits', () => {
    expect(Countdown).toExist();
  });

  describe('handleSetCountdown', () => {
    var countdown = ReactTestUtils.renderIntoDocument(<Countdown/>);
    it('should set state to started and countdown', (done) => {

      countdown.handleSetCountdown(10);

      expect(countdown.state.seconds).toBe(10);
      expect(countdown.state.countdownStatus).toBe('started');
      var timeout = setTimeout(() => {
        expect(countdown.state.seconds).toBe(9);
        done();
      }, 1001);

    });

    it('should not countdown to negative seconds', (done) => {
      countdown.handleSetCountdown(1);
      var timeout = setTimeout(() => {
        expect(countdown.state.seconds).toBe(0);
        done();
      }, 3001);

    });

    it('should pause countdown on paused status', (done) => {
      countdown.handleSetCountdown(10);
      countdown.handleStatusChange('paused');
      var timeout = setTimeout(() => {
        expect(countdown.state.seconds).toBe(10);
        expect(countdown.state.countdownStatus).toBe('paused');
        done();
      }, 1001);
    });

    it('should stop countdown on stopped status', (done) => {
      countdown.handleSetCountdown(10);
      countdown.handleStatusChange('stopped');
      var timeout = setTimeout(() => {
        expect(countdown.state.seconds).toBe(0);
        expect(countdown.state.countdownStatus).toBe('stopped');
        done();
      }, 1001);
    })

  })
});
