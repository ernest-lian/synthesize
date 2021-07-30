import logo from './logo.svg';
import './App.css';

function api(){
  return fetch("https://ernest-lian-synthesize.herokuapp.com/testing", {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      'value': 'ernest'
    })
  }).then(response => {
      console.log(response)
    })
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <input type='button' onClick={() => api()}></input>
    </div>
  );
}

export default App;
