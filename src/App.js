import React, { Component } from 'react';
import './App.css';
import Content from "./components/Content";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {selectedSvg: '1', selectedTekst: '1', selectedAudio: "1", svgTarget: ["1","1"],
            audioTarget: ["1","1"], tekstTarget: ["1","1"],
            isPlaying: 'audio/1/1.mp3'};

        this.handleSvgOptionChange = this.handleSvgOptionChange.bind(this);
        this.handleTekstOptionChange = this.handleTekstOptionChange.bind(this);
        this.handleAudioOptionChange = this.handleAudioOptionChange.bind(this);
        this.handleTabChange = this.handleTabChange.bind(this);
    }

    handleSvgOptionChange(changeEvent) {
        this.setState({
            selectedSvg: changeEvent.target.value, svgTarget: [changeEvent.target.value, this.state.svgTarget[1]]
        });
    }
    handleTekstOptionChange(changeEvent) {
        this.setState({
            selectedTekst: changeEvent.target.value, tekstTarget: [changeEvent.target.value, this.state.tekstTarget[1]]
        });
    }
    handleAudioOptionChange(changeEvent) {
        this.setState({
            selectedAudio: changeEvent.target.value
        });

        this.setState((state) => { return {
            audioTarget: [state.selectedAudio, state.audioTarget[1]]
        }});

        this.setState({isPlaying: 'audio/' + changeEvent.target.value + '/' + this.state.audioTarget[1] +'.mp3'}, function () {
            this.refs.audio.pause();
            this.refs.audio.load();
            this.refs.audio.play();

        })
    }

    handleTabChange(changeEvent) {
        this.setState({
        audioTarget: [this.state.audioTarget[0], changeEvent.target.value],
            svgTarget: [this.state.svgTarget[0], changeEvent.target.value],
            tekstTarget: [this.state.tekstTarget[0], changeEvent.target.value]
        });
        this.setState({isPlaying: 'audio/' + this.state.audioTarget[0] + '/' + changeEvent.target.value +'.mp3'}, function () {
            this.refs.audio.pause();
            this.refs.audio.load();
            this.refs.audio.play();

        })
    }


  render() {
      let path = 'audio/' + this.state.audioTarget[0] + '/' + this.state.audioTarget[1] +'.mp3';
      return (
          <div className="Grid-container">

              <div className="box1">
                  <h1>Box1: Overskrift</h1>
              </div>
              <div className="box2">
                  <div className="tab">
                      <div className="nested">
                          <button className="tablinks" value={1} onClick={this.handleTabChange}>The Sun</button>
                          <button className="tablinks" value={2} onClick={this.handleTabChange}>The Moon</button>
                          <button className="tablinks" value={3} onClick={this.handleTabChange}>The Stars</button>
                          <button className="tablinks" value={4} onClick={this.handleTabChange}>Detroit</button>
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
                  <Content svgTarget={this.state.svgTarget} tekstTarget={this.state.tekstTarget} />
                  <audio autoPlay loop ref="audio">
                      <source src={path} type={"audio/mpeg"}/>
                      Your browser is trash
                  </audio>
              </div>

          </div>
      );
     }
}

export default App;
