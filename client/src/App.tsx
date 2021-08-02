import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css'; 

function api(){
  return fetch("http://localhost:5000/testing", {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      'value': 'ernest'
    })
  })
  .then(response => response.json())
  .then(data => {
    console.log('the data: ', data)
  }).catch(error => console.error('Error', error))
}

const App = ({
    
}) => {
  const [text, setText] = useState("");


   const handleClick = () => {
      return fetch("http://localhost:5000/testing", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          'value': 'ernest'
        })
      })
      .then(response => response.json())
      .then(data => {
        setText(data['name'])
        console.log('the data: ', data)
      }).catch(error => console.error('Error', error))
  }

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
      <p>{text}</p>
      <button onClick={() => handleClick()}></button>;
    </div>
  );
}

export default App;
