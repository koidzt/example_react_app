import logo from './logo.svg';
import PersonCard from './components/PersonCard';
import './App.css';

function App() {
  return (
    <div className="App">
      <PersonCard name={'Tom'} age={20} color={'grey'} />
      <PersonCard name={'Jerry'} age={15} color={'brown'} />
      <PersonCard name={'Baymax'} age={10} color={'white'} />
    </div>
  );
}

export default App;
