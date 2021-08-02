import React, { useState } from 'react';

import './App.css'; 
import Loading from './user_interface/loading.tsx'

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
      <Loading/>
      <p>{text}</p>
      <button onClick={() => handleClick()}></button>;
    </div>
  );
}

export default App;
