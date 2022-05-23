import React, { useState } from 'react';
import { createTheme, ThemeProvider } from "@material-ui/core/styles";

import './App.css'; 
import Window from './user_interface/window';

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

const theme = createTheme({
  typography: {
    fontFamily: [
      "Arial"
    ].join(",")
  }
});

const App = ({
    
}) => {
  const [text, setText] = useState("");

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Window/>
      </div>
    </ThemeProvider>
  );
}

export default App;
