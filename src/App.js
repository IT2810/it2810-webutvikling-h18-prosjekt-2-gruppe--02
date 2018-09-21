import React, { Component } from 'react';
import './App.css';
import Content from "./components/Content";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {selectedSvg: '1', selectedTekst: '1', selectedAudio: "1", svgTarget: ["1","1"], audioTarget: ["1","1"], tekstTarget: ["1","1"]};

        this.handleSvgOptionChange = this.handleSvgOptionChange.bind(this);
        this.handleTekstOptionChange = this.handleTekstOptionChange.bind(this);
        this.handleAudioOptionChange = this.handleAudioOptionChange.bind(this);
    }

    handleSvgOptionChange(changeEvent) {
        this.setState({
            selectedSvg: changeEvent.target.value, svgTarget: [changeEvent.target.value, this.state.svgTarget[1]]
        });
    }
    handleTekstOptionChange(changeEvent) {
        this.setState({
            selectedTekst: changeEvent.target.value
        });
    }
    handleAudioOptionChange(changeEvent) {
        this.setState({
            selectedAudio: changeEvent.target.value
        });
    }


  render() {
      let path = 'audio/' + this.state.audioTarget[0] + '/' + this.state.audioTarget[1] +'.mp3';
      return (
          <div className="Grid-container">

              <div className="box1">
                  <h1>Box1: Overskrift</h1>
              </div>
              <div className="box2">
                  <div class="tab">
                      <div class="nested">
                          <button className="tablinks" onClick="openCity(event, 'Kategori 1')">Kategori 1</button>
                          <button className="tablinks" onClick="openCity(event, 'Kategori 2')">Kategori 2</button>
                          <button className="tablinks" onClick="openCity(event, 'Kategori 3')">Kategori 3</button>
                          <button className="tablinks" onClick="openCity(event, 'Kategori 4')">Kategori 4</button>
                      </div>
                  </div>
              </div>
              <div className="box3">
                  <h3>SVG</h3>
                  <form action="">
                      <div className={"radio"}>
                          <label>
                              <input type={"radio"} value={"1"}
                                     checked={this.state.selectedSvg==="1"}
                                     onChange={this.handleSvgOptionChange}/>
                              Kategori 1
                          </label>
                      </div>
                      <div className={"radio"}>
                          <label>
                              <input type={"radio"} value={"2"}
                                     checked={this.state.selectedSvg==="2"} onChange={this.handleSvgOptionChange}/>
                              Kategori 2
                          </label>
                      </div>
                      <div className={"radio"}>
                          <label>
                              <input type={"radio"} value={"3"}
                                     checked={this.state.selectedSvg==="3"} onChange={this.handleSvgOptionChange}/>
                              Kategori 3
                          </label>
                      </div>
                  </form>
                  <h3>Tekst</h3>
                  <form action="">
                      <div className={"radio"}>
                          <label>
                              <input type={"radio"} value={"1"}
                                     checked={this.state.selectedTekst==="1"}
                                     onChange={this.handleTekstOptionChange}/>
                              Kategori 1
                          </label>
                      </div>
                      <div className={"radio"}>
                          <label>
                              <input type={"radio"} value={"2"}
                                     checked={this.state.selectedTekst==="2"} onChange={this.handleTekstOptionChange}/>
                              Kategori 2
                          </label>
                      </div>
                      <div className={"radio"}>
                          <label>
                              <input type={"radio"} value={"3"}
                                     checked={this.state.selectedTekst==="3"} onChange={this.handleTekstOptionChange}/>
                              Kategori 3
                          </label>
                      </div>
                  </form>
                  <h3>Audio</h3>
                  <form action="">
                  <div className={"radio"}>
                      <label>
                          <input type={"radio"} value={"1"}
                                 checked={this.state.selectedAudio==="1"}
                                 onChange={this.handleAudioOptionChange}/>
                          Kategori 1
                      </label>
                  </div>
                  <div className={"radio"}>
                      <label>
                          <input type={"radio"} value={"2"}
                                 checked={this.state.selectedAudio==="2"} onChange={this.handleAudioOptionChange}/>
                          Kategori 2
                      </label>
                  </div>
                  <div className={"radio"}>
                      <label>
                          <input type={"radio"} value={"3"}
                                 checked={this.state.selectedAudio==="3"} onChange={this.handleAudioOptionChange}/>
                          Kategori 3
                      </label>
                  </div>
              </form>
              </div>

              <div className="box4">
                  <Content svgTarget={this.state.svgTarget} tekstTarget={this.state.tekstTarget}/>
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
