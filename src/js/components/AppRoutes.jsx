import React, {Component} from 'react';
import {Route} from 'react-router-dom';

const AppRoutes = (props) => {
  return (
    <div>
      <Route exact path="/" component={}/>
      <Route path='/about' component={}/>
      <Route path='/examples' component={}/>
    </div>
  );
}

export default AppRoutes;
