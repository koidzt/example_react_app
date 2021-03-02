import axios from 'axios';
import { useEffect } from 'react';
import './App.css';

function App() {
  useEffect(() => {
    axios
      .all([
        axios.post('https://api.dev.farmbook.co/mbapi/test', { fn: 'nodeJS' }),
        axios.post('https://api.dev.farmbook.co/mbapi/test', { fn: 'nodeJS' }),
        axios.post('https://api.dev.farmbook.co/mbapi/test', { fn: 'nodeJS' }),
        axios.post('https://api.dev.farmbook.co/mbapi/test', { fn: 'nodeJS' }),
        axios.post('https://api.dev.farmbook.co/mbapi/test', { fn: 'nodeJS' }),
      ])
      .then(
        axios.spread((resp1, resp2, resp3, resp4, resp5) => {
          console.log(
            resp1.data.data +
              '\n' +
              resp2.data.data +
              '\n' +
              resp3.data.data +
              '\n' +
              resp4.data.data +
              '\n' +
              resp5.data.data
          );
        })
      )
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Test</h1>
      </header>
    </div>
  );
}

export default App;
