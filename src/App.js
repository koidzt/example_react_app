import axios from 'axios';
import { useEffect } from 'react';
import './App.css';
async function test() {
  try {
    const resp1 = axios.post('https://api.dev.farmbook.co/mbapi/test', { fn: 'nodeJS' });
    const resp2 = axios.post('https://api.dev.farmbook.co/mbapi/test', { fn: 'nodeJS' });
    const resp3 = axios.post('https://api.dev.farmbook.co/mbapi/test', { fn: 'nodeJS' });
    const resp4 = axios.post('https://api.dev.farmbook.co/mbapi/test', { fn: 'nodeJS' });
    const resp5 = axios.post('https://api.dev.farmbook.co/mbapi/test', { fn: 'nodeJS' });

    const getAllResp = await Promise.all([resp1, resp2, resp3, resp4, resp5]);
    console.log('res', ...getAllResp.map((res) => '\n' + res.data.data));
  } catch (err) {
    console.log(err);
  }
}

function App() {
  useEffect(() => {
    test();
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
