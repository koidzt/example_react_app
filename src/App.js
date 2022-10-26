import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './components/PersonCard';

class App extends Component {
  // new version react for setState by class
  // remove constructor(props){super()} remove this. before render() but function need arrow function
  state = {
    isWhite: true,
    bgColor: '',
    inputValue: '',
  };

  changeBgColor = () => {
    this.setState({ bgColor: this.state.inputValue });
  };

  changeIsWhiteToFalse = () => {
    this.setState({ isWhite: false });
  };

  changeInputValue = (e) => {
    this.setState({ inputValue: e.target.value });
  };

  render() {
    //this.state.isWhite เรียกใช้ได้ แต่ห้ามทำแบบบรรทัดล่างเด็จขาด
    //this.state.isWhite = false; แต่ห้ามกำหนดค่าตรงๆที่จุด render
    //ถ้ากำหนดค่าให้ใช้ this.setState.isWhite({ isWhite: false })
    let background = this.state.isWhite ? 'white' : this.state.bgColor ? this.state.bgColor : 'lightcyan';
    return (
      <div className="App" style={{ backgroundColor: background }}>
        <input value={this.state.inputValue} onChange={this.changeInputValue} />
        <button onClick={this.changeBgColor}>Change to input color</button>
        <button onClick={this.changeIsWhiteToFalse}>Change is not white background color.</button>
        <Person name="Koi" age={28} color="Black" />
        <Person name="Cake" age={29} color="Blue" />
        <Person name="Pup" age={27} color="Green" />
      </div>
    );
  }
}

export default App;
