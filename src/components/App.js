import React, { Component } from 'react';
import logo from '../assets/images/logo.svg';
import '../assets/css/app.css';
import 'materialize-css/dist/css/materialize.min.css';
import Nav from './nav';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
      </div>
    );
  }
}

export default App;
