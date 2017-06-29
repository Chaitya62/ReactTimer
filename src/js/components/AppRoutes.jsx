import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import Timer from './Timer.jsx';
import Countdown from './Countdown.jsx';
const AppRoutes = (props) => {
  return (
    <div>
      <Route exact path='/' component={Timer}/>
      <Route path='/countdown' component={Countdown}/>
    </div>
  );
}

export default AppRoutes;
