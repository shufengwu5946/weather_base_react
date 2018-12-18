import React, { Component } from 'react';
import './App.css';
import Weather from './weather/weather'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Weather></Weather>
      </div>
    );
  }
}

export default App;
