import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
import ReactTestUtils from 'react-dom/test-utils'
import Clock from 'Components/Clock';
import $ from 'jquery/dist/jquery.min.js';

describe('Clock', () => {
  it('should exits', () => {
    expect(Clock).toExist();
  });
});

describe('Render', () => {
  it('should render clock to output', () => {

    var clock = ReactTestUtils.renderIntoDocument(<Clock totalSeconds={62}/>);
    var $el = $(ReactDOM.findDOMNode(clock));
    var actualText = $el.find('.clock-text').text();
    var expectedText = '01:02';
    expect(actualText).toBe(expectedText);
  });
});

describe('Format Seconds', () => {
  var clock = ReactTestUtils.renderIntoDocument(< Clock />);
  it('should format seconds', () => {

    var seconds = 615;
    var expected = "10:15";
    var actual = clock.formatSeconds(seconds);
    expect(actual).toBe(expected);
  });
  it('should format seconds when min/sec less than 10', () => {

    var seconds = 61;
    var expected = "01:01";
    var actual = clock.formatSeconds(seconds);
    expect(actual).toBe(expected);
  });
});
