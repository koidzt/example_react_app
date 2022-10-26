import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  state = {
    // inputValue: "",
    count: 0,
  };
  render() {
    return (
      <div className="App" style={{ margin: '1em' }}>
        {/* <input
          onChange={(e) => this.setState({ inputValue: e.target.value })}
          style={{ width: "400px", height: "50px", fontSize: "40px" }} />
        <h1>{this.state.inputValue}</h1>   */}
        <button
          onClick={() => {
            this.setState({ count: this.state.count + 1 });
          }}
          style={{ fontSize: '4em', width: '3em', padding: '0.2em' }}
        >
          UP
        </button>
        <h1 style={{ fontSize: '10em' }}>{this.state.count}</h1>
        <button
          onClick={() => {
            this.setState({ count: this.state.count - 1 });
          }}
          disabled={this.state.count === 0}
          style={{ fontSize: '4em', padding: '0.2em' }}
        >
          DOWN
        </button>
        <button
          onClick={() => this.setState({ count: 0 })}
          style={{ fontSize: '4em', padding: '0.2em', margin: '0.2em' }}
        >
          RESET
        </button>
      </div>
    );
  }
}

export default App;
