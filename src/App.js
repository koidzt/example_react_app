import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './components/PersonCard';

class App extends Component {
  constructor(props) {
    super();
    this.state = {
      isWhite: true,
      bgColor: '',
      inputValue: '',
    };
    this.changeIsWhiteToFalse = this.changeIsWhiteToFalse.bind(this);
    this.changeBgColor = this.changeBgColor.bind(this);
  }

  changeBgColor() {
    this.setState({ bgColor: this.state.inputValue });
  }

  changeIsWhiteToFalse() {
    this.setState({ isWhite: false });
  }

  render() {
    //this.state.isWhite เรียกใช้ได้ แต่ห้ามทำแบบบรรทัดล่างเด็จขาด
    //this.state.isWhite = false; แต่ห้ามกำหนดค่าตรงๆที่จุด render
    //ถ้ากำหนดค่าให้ใช้ this.setState.isWhite(false) หรือ this.setState.isWhite({ isWhite: false })
    let background = this.state.isWhite ? 'white' : this.state.bgColor ? this.state.bgColor : 'lightcyan';
    return (
      <div className="App" style={{ backgroundColor: background }}>
        <input value={this.state.inputValue} onChange={(e) => this.setState({ inputValue: e.target.value })} />
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
