import React, { Component } from 'react';
import './App.css';
import PersonCard from './components/PersonCard';

class App extends Component {
  state = {
    isWhite: true,
  };

  setIsWhiteToFalse = () => {
    this.setState({ isWhite: !this.state.isWhite });
  };

  render() {
    const background = this.state.isWhite ? 'white' : 'lightcyan';
    const width = this.state.isWhite ? '15em' : '15em';
    const height = this.state.isWhite ? '3em' : '2em';
    const fontSize = this.state.isWhite ? '0.75em' : '1.5em';
    return (
      <div className="App" style={{ height: '100vh', backgroundColor: background }}>
        <PersonCard name={'Tom'} age={20} color={'grey'} />
        <PersonCard name={'Jerry'} age={15} color={'brown'} />
        <PersonCard name={'Baymax'} age={10} color={'white'} />

        <button onClick={this.setIsWhiteToFalse} style={{ width: width, height: height, fontSize: fontSize }}>
          change background color
        </button>
      </div>
    );
  }
}

export default App;
