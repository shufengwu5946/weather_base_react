import React, { Component } from 'react';
import './App.css';
import Weather from './weather/weather'
import Light from './light/light'

class App extends Component {

  render() {
    return (
      <div className="App">
        <Light></Light>
        <Weather></Weather>
      </div>
    );
  }
}

export default App;
