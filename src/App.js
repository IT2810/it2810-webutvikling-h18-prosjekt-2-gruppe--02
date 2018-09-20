import React, { Component } from 'react';
/*import logo from './logo.svg'; /*logo from previous code and unimported*/
import './App.css';

class App extends Component {
  render() {
      return(
          <div className="Grid-container">

              <div className="box1">
                  <h1>Box1: Overskrift</h1>
              </div>
              <div className="box2">
                  Box2: ContentRow
              </div>
              <div className="box3">
                  <h3>Medie</h3>
                    <p><input type="checkbox" defaultValue="Box1" /> Innhold</p>
                    <p><input type="checkbox" defaultValue="Box1" /> Innhold</p>
                    <p><input type="checkbox" defaultValue="Box1" /> Innhold</p>
                  <h3>Medie</h3>
                    <p><input type="checkbox" defaultValue="Box1" /> Innhold</p>
                    <p><input type="checkbox" defaultValue="Box1" /> Innhold</p>
                    <p><input type="checkbox" defaultValue="Box1" /> Innhold</p>
                  <h3>Medie</h3>
                    <p><input type="checkbox" defaultValue="Box1" /> Innhold</p>
                    <p><input type="checkbox" defaultValue="Box1" /> Innhold</p>
                    <p><input type="checkbox" defaultValue="Box1" /> Innhold</p>
              </div>

              <div className="box4">
                  Box4: Bilde
              </div>

          </div>
      );
    /*return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );*/
  }
}

export default App;
