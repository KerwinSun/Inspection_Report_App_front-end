import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Hitch Building Inspections</h1>
        </header>
        <p className="App-intro">
          "Continuous deployment has been set up all changes to master will update this page."
        </p>
      </div>
    );
  }
}

export default App;
