import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Content from './components/Content.js'

class App extends Component {
    render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to This I guess</h1>
        </header>
        <div className="Ajax-box">
            <Content />
        </div>
      </div>
    );
  }
}

export default App;
