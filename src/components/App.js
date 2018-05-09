import React, { Component } from 'react';
import logo from '../assets/images/logo.svg';
import 'materialize-css/dist/css/materialize.min.css';
import { Route } from 'react-router-dom';
import HomePage from './homePage';

export default () => (    
  <div>
      <Route exact path="/" component={HomePage} />  
      {/* <Route path="/macarons" component={Macarons} /> */}
      {/* <Route path="/gifts-parties" component={GiftsParties} /> */}
      {/* <Route path="/contact" component={Contact} /> */}
  </div>
);
