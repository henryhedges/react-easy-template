import React, { Component } from 'react';
import logo from '../assets/images/logo.svg';
import '../assets/styles/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Your App!</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;