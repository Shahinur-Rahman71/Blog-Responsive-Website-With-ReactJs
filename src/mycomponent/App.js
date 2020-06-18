import React, { Component } from 'react';
import './App.css';
import {BrowserRouter} from 'react-router-dom'
import Navigation from './RoutingPart/Navigation';
import Routing from './RoutingPart/Routing';


class App extends Component {
  render() {
    return (
      <React.Fragment>
        <BrowserRouter>
          <Navigation/>
          <Routing/>
        </BrowserRouter>
      </React.Fragment>
    );
  }
}

export default App;
