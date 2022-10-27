import React, { Component } from 'react';
import './App.css';
import img1 from './assets/images/hxh6.jpg';

class App extends Component {
  state = {
    picIdx: 0,
  };

  render() {
    const picList = ['https://en.pimg.jp/054/787/903/1/54787903.jpg', img1, require('./assets/images/wxi.jpg').default];

    return (
      <div className="App">
        <button
          onClick={() => {
            this.setState({ picIdx: this.state.picIdx - 1 });
          }}
          disabled={this.state.picIdx === 0}
        >
          PREV
        </button>
        <img src={picList[this.state.picIdx]} width="500px" height="500px"></img>
        <button
          onClick={() => {
            this.setState({ picIdx: this.state.picIdx + 1 });
          }}
          disabled={this.state.picIdx === picList.length - 1}
        >
          NEXT
        </button>
      </div>
    );
  }
}

export default App;
