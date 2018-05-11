import React from 'react';
import logo from '../assets/images/logo.svg';
import 'materialize-css/dist/css/materialize.min.css';
import { Route } from 'react-router-dom';
import HomePage from './home-page';
import OurMacarons from './macarons';
import GiftsAndParties from './gifts-parties';
import Contact from './contact';
import '../assets/css/index.css';

export default () => (
  <div>
    {/* <div className="container hide-on-med-and-down">
      <Route exact path="/" component={HomePage} />  
      <Route path="/our-macarons" component={OurMacarons} />
      <Route path="/gifts-parties" component={GiftsAndParties} />
      <Route path="/contact" component={Contact} />
    </div> */}
    <div className="desktop-size">
      <Route exact path="/" component={HomePage} />  
      <Route path="/our-macarons" component={OurMacarons} />
      <Route path="/gifts-parties" component={GiftsAndParties} />
      <Route path="/contact" component={Contact} />
    </div>
  </div>
);
