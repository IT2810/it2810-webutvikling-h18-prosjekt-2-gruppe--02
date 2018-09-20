import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Content from './components/Content.js'

class App extends Component {
    render() {
        let targets = [1, 1];
        let path = 'audio/' + targets[0].toString() + '/' + targets[1].toString() +'.mp3';
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to This I guess</h1>
        </header>
        <div className="Ajax-box">
            <Content targets={targets}/>
            <audio autoPlay loop>
                <source src={path} type={"audio/mpeg"}/>
                Your browser is trash
            </audio>
        </div>
      </div>
    );
  }
}

export default App;
