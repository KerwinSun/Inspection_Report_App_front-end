import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const API = 'http://inspection-report-app-server.azurewebsites.net/api/todo';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    // fetch(API)
    // fetch(API, { mode: 'no-cors'})
    fetch(API, {
      method: 'GET',
      headers: {
        'Access-Control-Allow-Origin': '*'
      }
    })
      .then(res => res.json())
      .then(res => this.setState({ data: res }))
  }

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
        <ul>
          {this.state.data.map((d, i) => <li key={i}>id: {d.id} name: {d.name} isComplete: {d.isComplete.toString()}</li>)}
        </ul>
      </div>
    );
  }
}

export default App;
